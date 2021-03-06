import Ember from 'ember';
import ENV from '../config/environment';
import jwtDecode from 'ember-jwt-decode';

export default Ember.Service.extend({ 

 host: ENV.webServer,
   
 login (data) {    

   let loginPromise =    Ember.$.ajax({
      url: this.host +"/login",
      type: "POST",
      data: data
    });
    

    return loginPromise;    
  },


  isAuthenticated()
  {
  
    if(!localStorage.getItem(ENV.TOKEN_KEY))
    {
     
      return false;
    }     
    let token = localStorage.getItem(ENV.TOKEN_KEY);   
    token = jwtDecode(token);
    return (token.expiryTimestamp> new Date().toISOString() );
  },
  logout()
  {
   
    localStorage.removeItem(ENV.TOKEN_KEY);
  },

  getLoggedinUser()
  {
     return Ember.$.ajax({
      url : this.host + "/login" ,
      type: "GET",
      cache: "true",
      beforeSend: function(xhr){xhr.setRequestHeader(ENV.REQUEST_AUTHKEY, localStorage.getItem(ENV.TOKEN_KEY) );}
    });    

  },


});

