import Ember from 'ember';

export default Ember.Service.extend({

    
    getDashboardData(){
        let data = Ember.$.getJSON('/data/data.json');
        return data;


    }
               
    
});
