import Ember from 'ember';
import ENV from '../config/environment';


export default Ember.Service.extend({

    
    loginervice : Ember.inject.service('login-service') ,
   getDashboardData(){  
       return Ember.$.ajax( ENV.webServer+ "/dashboard",
        {
            "type" : "get",
            "dataType":"JSON",
            beforeSend: function(xhr){xhr.setRequestHeader("Authorization", localStorage.getItem(ENV.TOKEN_KEY) );}                
        }  ); 
    },

    getUserProfileData(requestor)
    {
        
        return Ember.$.ajax( ENV.webServer+ "/userprofile/" + requestor.requestorId,
        {
            "type" : "get",
            "dataType":"JSON",
            beforeSend: function(xhr){xhr.setRequestHeader("Authorization", localStorage.getItem(ENV.TOKEN_KEY) );}                
        }  );

    }


               
    
});