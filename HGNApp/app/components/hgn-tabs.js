import Ember from 'ember';
import ChartMixin from './../mixins/chart';

export default Ember.Component.extend(ChartMixin, {
//Horizontal bar chart
  drawData: function() {
   // var color = '#FDFEFE';
    var data = this.get('data');

    //var height = this.get('chartHeight');
    //var width = this.get('chartWidth');
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
    .attr('y', function(d) {
      return y(d.name);
    })
    /*
    .attr('height', y.bandwidth() / 2)
    .attr('x', function() {
      return 0;
    })
    .attr('width', function(d) {
      return x(d.value);
    })
    .attr('fill', function(d){
      return d.color;
    })
    .attr('tooltip', function(d){
      return d.value;
      */
    });

}

});
