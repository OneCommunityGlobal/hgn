import Ember from 'ember';

export default Ember.Route.extend({
  
  model(){
    return {
      weekData:{

        chartOptions:
        {
          segmentShowStroke : true,
          segmentStrokeWidth : 1,
          percentageInnerCutout : 80,

        },

        chartData:[
        {
            value: 12,
            color: "#20A272",
            label: "Hours Worked"
        },
        {
            value: 28,
            color: "white",
            label: "Hours Remaining"
        }]
      },

    monthData:{

      chartOptions:{
        scaleShowGridLines : false,
         barValueSpacing  : 4
      },

      chartData:{
        labels: ["Food Programme", "Software Development", "Real Estate"],
        datasets: [
          {
              label: "April Month",
              fillColor: "#ffffff",
              strokeColor: "#ffffff",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [4,2,5]
          }
        ]
      }
    }



  };
  }
});
