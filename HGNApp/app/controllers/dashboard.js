import Ember from 'ember';

export default Ember.Controller.extend({
    
    userProfile :{},

    hoursthismonth : Ember.computed('model.laborthismonth',function(){

        let monthlydata =this.get('model.laborthismonth');

        let labels = [];
        let data = [];
        let backgroundColor = [];

        monthlydata.forEach(element => {

            labels.push(element.projectName);
           data.push(parseFloat(element.timeSpent_hrs).toFixed(2));

          // backgroundColor.push(`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`)

          backgroundColor.push("teal")

            
        });

        return{
            labels: labels,
            datasets: [{
                label : "Effort Spent",
                data : data,
                borderWidth: 1,
                backgroundColor : backgroundColor
            }]            
        }

    }),
    baroptions: 
            {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }    
                          
            },

    hoursthisweek : Ember.computed('model.laborthisweek', 'model.userSnapshot.weeklyComittedHours',function(){
        
        let actual = this.get('model.laborthisweek');
        let actualhours = parseFloat(actual[0].timeSpent_hrs).toFixed(2);
        let committedhours = parseFloat(this.get('model.userSnapshot.weeklyComittedHours')).toFixed(2);    


    return {
        labels: ["Actual Effort", "Committed Effort"],
        
        datasets: [{ 
            data: [actualhours, committedhours],
            backgroundColor : ["purple", "blue"]
        }]
        
    }
    }),

    pieChartOptions : 
    {       
              
    
    },
   
    
    actions :{

        MyProfile(){
               
          this.transitionToRoute('myprofile');
      }
      
      }

});
