import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let realData = this.store.findAll('timelog');
    return{

      TimeLogData:{
        RealData: realData,
        Notifications:
          [
            {message: "Test notification 1"},
            {message: "Test notification 2"},
            {message: "Test notification 3"},
            {message: "Test notification 4"},

        ],
        ActionItems:
        [
          {ActionItem: "Test Action Item 1"},
          {ActionItem: "Test Action Item 2"},
          {ActionItem: "Test Action Item 3"},
          {ActionItem: "Test Action Item 4"},
        ],
        History:[

        ]

      },
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
