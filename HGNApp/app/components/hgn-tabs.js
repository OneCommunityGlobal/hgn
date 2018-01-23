import Ember from 'ember';
import ChartMixin from './../mixins/chart';

export default Ember.Component.extend(ChartMixin, {
//Horizontal bar chart
  drawData: function() {
   // var color = '#FDFEFE';

    var data = this.get('data');

    //var height = this.get('chartHeight');
    //var width = this.get('chartWidth');

    var color = '#00bfff';
    var data = this.get('data');
    var height = this.get('chartHeight');
    var width = this.get('chartWidth');
    var svg = this.get('chartSVG');
    var x = this.get('xScale');
    var y = this.get('yScale');
    var tooltip = "try this";


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
    .attr('height', y.bandwidth() / 2)
    .attr('x', function() {
      return 0;
    })
    .attr('width', function(d) {
      return x(d.totaltime);
    })
    .attr('fill', function(d){
      if(d.percentagespentintangible < 4.9) {return "rgb(206,10,43)";}
      //Orange
      else if (d.percentagespentintangible < 9.9) {return "rgb(206,111,10)";}
      //Green
      else if (d.percentagespentintangible < 19.9) {return "rgb(16,206,10)";}
      //blue
      else if (d.percentagespentintangible < 29.9) {return "rgb(10,121,206)";}
      //Indigo
      else if (d.percentagespentintangible < 39.9) {return "rgb(92,10,206)";}
      //Violet
      else if (d.percentagespentintangible < 49.9) {return "rgb(177,10,206)";}
      //Purple
      else {return "rgb(134,10,206)";}
    })
  

  }
});
