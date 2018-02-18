import Ember from 'ember';

export default Ember.Component.extend({

    init()
    {
        this._super(...arguments);
        return this.get('DashboardService').getWeeklyEffort(this.loggedinUser)
        .then( result => {this.set('laborthisweek', result);})
        .then(() => {
            let actual = this.get('laborthisweek');
            let actualhours = parseFloat(actual[0].timeSpent_hrs).toFixed(2);
            let committedhours = parseFloat(actual[0].weeklyComittedHours).toFixed(2);    
    
    
        let result = {
            labels: ["Actual Effort", "Committed Effort"],
            
            datasets: [{ 
                data: [actualhours, committedhours],
                backgroundColor : ["green", "white"]
            }]
            
        }
        this.set('hoursthisweek', result)

        })

    },

    
    pieChartOptions : 
    {       
        legend: {
            display: true,
            usePointStyle : true,
            position : "bottom",
            labels: {
                
            }
        }
    
    },
});
