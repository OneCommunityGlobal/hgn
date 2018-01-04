import Ember from 'ember';
import ENV from '../config/environment';


export default Ember.Service.extend({

    
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

    },
    saveUserProfileData( user, userId)
    {
        alert("service triggered");
       return Ember.$.ajax( ENV.webServer+ "/userprofile/" + userId,
       {
           "type" : "put",
           "dataType":"JSON",
           data: user,
           beforeSend: function(xhr){xhr.setRequestHeader("Authorization", localStorage.getItem(ENV.TOKEN_KEY) );}                
       }  );

       }


               
    
});