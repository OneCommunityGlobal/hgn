import Ember from 'ember';
import ENV from '../config/environment';

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
    //TODO add token expiry also
    return (!!localStorage.getItem(ENV.TOKEN_KEY));

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

