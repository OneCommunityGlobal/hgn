import Ember from 'ember';

export default Ember.Component.extend({

    init()
    {
        this._super(...arguments);
        return this.get('DashboardService').getMonthlyEffort(this.loggedinUser)
        .then( result => {this.set('laborthismonth', result);})
        .then(() => {

            let monthlydata =this.get('laborthismonth');    
            let labels = [];
            let data = [];
            let backgroundColor = [];
    
            monthlydata.forEach(element => {
    
                labels.push(element.projectName);
               data.push(parseFloat(element.timeSpent_hrs).toFixed(2));
    
              // backgroundColor.push(`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`)
    
              backgroundColor.push("white")
    
                
            });
    
            let results = {
                labels: labels,
                datasets: [{
                    label : "Effort Spent",
                    data : data,
                    borderWidth: 1,
                    backgroundColor : backgroundColor
                }]            
            }

            this.set('hoursthismonth', results)
    
        })
    },

     baroptions: 
            {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                },
                legend: {
                    display: true,
                    usePointStyle : true,
                    position : "bottom",
                    labels: {
                        
                    }
                }   
                          
            },
});
