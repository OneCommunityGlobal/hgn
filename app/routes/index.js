import Ember from 'ember';

export default Ember.Route.extend({
  
  model(){
    return {
      leaderboardData:{
        dayData:[
          {
            name:"Jae Sabol",
            hours:64,
            rank:1
          },
          {
            name:"Lokesh Gopu",
            hours:45,
            rank:2
          },
          {
            name:"Volunteer 3",
            hours:38,
            rank:3
          },
          {
            name:"Volunteer 4",
            hours:38,
            rank:4
          },
          {
            name:"Volunteer 5",
            hours:38,
            rank:5
          },
          {
            name:"Volunteer 6",
            hours:38,
            rank:6
          },
          {
            name:"Volunteer 7",
            hours:38,
            rank:7
          },
          {
            name:"Volunteer 8",
            hours:38,
            rank:8
          },
          {
            name:"Volunteer 9",
            hours:38,
            rank:9
          },
          {
            name:"Volunteer 10",
            hours:38,
            rank:10
          },
          {
            name:"Volunteer 11",
            hours:38,
            rank:11
          },
          {
            name:"Volunteer 12",
            hours:38,
            rank:12
          },
          {
            name:"Volunteer 13",
            hours:38,
            rank:13
          }
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
