import Ember from 'ember';


export default Ember.Service.extend({

    
    getDashboardData(){
        
        let data = Ember.$.ajax("http://localhost:4500/api/dashboard",
        {
            "type" : "get",
            "dataType":"JSON"     
        }  ); 

        return data;
     
 }
               
    
});