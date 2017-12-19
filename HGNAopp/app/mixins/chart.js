import Ember from 'ember';

import $ from 'jquery';

export default Ember.Mixin.create({
  data: [],

  chartSVG: null,
  chartContainer: null,

  chartHeight: Ember.computed(function() {
    let height = 300;
    let margins = this.get('chartMargins');
    let myHeight = height - margins.top - margins.bottom;
    return myHeight;
  }),

  chartWidth: Ember.computed(function() {
    let width = this.$().width();
    let margins = this.get('chartMargins');
    let myWidth = width - margins.right - margins.left;
    return myWidth;
  }),

  chartMargins: {
    top: 20,
    right: 20,
    bottom: 60,
    left: 60
  },

  xScale: Ember.computed('data.[]', 'chartWidth', function() {
    var data = this.get('data');
    var width = this.get('chartWidth');
    var allValues = d3.extent(data, function(d) {
      return d.value;
    });
    return d3.scaleLinear()
      .domain(allValues)
      .range([0, width]);
  }),

  yScale: Ember.computed('data.[]', 'chartHeight', function() {
    var data = this.get('data');
    var height = this.get('chartHeight');
    return d3.scaleBand()
      .domain(data.mapBy('name'))
      .range([height, 0])
      .paddingOuter(1)
      .paddingInner(0.3);
  }),

  // -----------------------------------------------------------------------
  // METHODS
  // -----------------------------------------------------------------------

  addSVG: function() {
    var el = this.$().get(0); // Get the actual DOM node, not the jQuery element
    var height = this.get('chartHeight');
    var width = this.get('chartWidth');
    let margins = this.get('chartMargins');

    let fullWidth = width + margins.left + margins.right;
    let fullHeight = height + margins.top + margins.bottom;

    // Even though this is the actual SVG element, we will always use the appended
    // g-Element. This is used to make working with margins easier
    var container = d3.select(el).append('svg')
      .attr('class', `chart`)
      .attr('width', fullWidth)
      .attr('height', fullHeight)
      .attr('viewBox', `0 0 ${fullWidth} ${fullHeight}`)
      .attr('preserveAspectRatio', 'xMidYMid');

    let svg = container.append('g')
      .attr('transform', `translate(${margins.left},${margins.top})`);

    this.set('chartContainer', container);
    this.set('chartSVG', svg);
  },

  createXAxisElement: function() {
    let svg = this.get('chartSVG');
    var scale = this.get('xScale');
    let height = this.get('chartHeight');

    var xAxis = d3.axisBottom(scale)
      .tickSizeInner(4)
      .tickSizeOuter(0);

    svg.insert('g', ':first-child')
      .attr('class', 'chart__axis chart__axis--x')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', 'rotate(-45)');
  },

  createYAxisElement: function() {
    let svg = this.get('chartSVG');
    var scale = this.get('yScale');
    var ticks = 6;
    let width = this.get('chartWidth');

    var minMax = scale.domain();
    //var diff = minMax[1] - minMax[0];
    //var steps = diff / (ticks - 1);

    var tickValues = [];
    for (var i = 0; i < ticks; i++) {
      tickValues.push(minMax[i]);
    }

    var yAxis = d3.axisLeft(scale)
      .tickValues(tickValues)
    //  .tickFormat(d3.format('.0f'))
      .tickSizeInner(6)
      .tickSizeOuter(6);

    svg.insert('g', ':first-child')
      .attr('class', 'chart__axis chart__axis--y')
      .call(yAxis);
  },

  drawData: function() {
    // OVERRIDE THIS!
  },

  createChart: function() {
    // Clear the element, if there is something inside
    var chartEl = this.$().get(0);
    chartEl.innerHTML = '';

    // Actually create the SVG element
    this.addSVG();

    // Create the axes
    this.createXAxisElement();
    this.createYAxisElement();

    // Draw the data
    this.drawData();
  },

  updateChartSize() {
    this.notifyPropertyChange('chartWidth');
    this.createChart();
  },

  addResizeListener() {
    var _this = this;

    // Debounce the handler
    // This prevents the chart from being re-rendert all the time
    var _resizeHandler = function() {
      Ember.run.debounce(_this, _this.updateChartSize, 200);
    };

    $(window).on(`resize.${this.get('elementId')}`, _resizeHandler);
  },

  removeResizeListener() {
    $(window).off(`resize.${this.get('elementId')}`);
  },

  // -----------------------------------------------------------------------
  // LIFECYCLE HOOKS
  // These are special functions that are called by ember at different stages
  // of the component's lifecycle.
  // -----------------------------------------------------------------------

  didInsertElement: function() {
    this.createChart();

    // Add a resize listener
    this.addResizeListener();
  },

  willDestroyElement() {
    this.removeResizeListener();
  }
});
