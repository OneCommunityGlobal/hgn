import Ember from 'ember';
import ChartMixin from './../mixins/chart';

export default Ember.Component.extend(ChartMixin, {

  drawData: function() {
    var color = '#60a425';

    var data = this.get('data');
    var height = this.get('chartHeight');
    var svg = this.get('chartSVG');
    var x = this.get('xScale');
    var y = this.get('yScale');

    // Select all bars
    var bars = svg
      .selectAll('.bar-chart__bar')
      .data(data, function(d) {
        return d.name;
      });

    // The new ones are appended
    bars.enter()
      .append('rect')
      .attr('class', 'bar-chart__bar')
      .attr('x', function(d) {
        return x(d.name) + x.bandwidth() / 3;
      })
      .attr('width', x.bandwidth() / 3)
      .attr('y', function(d) {
        return y(d.value);
      })
      .attr('height', function(d) {
        return height - y(d.value);
      })
      .attr('fill', color);
  }

});
