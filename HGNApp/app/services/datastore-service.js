import Ember from 'ember';
import ENV from '../config/environment';


export default Ember.Service.extend({

    host: ENV.webServer,

        
    getDashboardData(){
        
       var token = localStorage.getItem("token");
      
        let data = Ember.$.ajax( this.host+ "/dashboard",
        {
            "type" : "get",
            "dataType":"JSON",
            beforeSend: function(xhr){xhr.setRequestHeader("Authorization", token );}                
        }  ); 
        return data;
     
 }
               
    
});