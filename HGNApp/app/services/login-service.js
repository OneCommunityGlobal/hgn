import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({

 host: ENV.webServer,
 LoggedinUserId: null,
 LoggedinUserRole: null,
  
 login (data) {    

   let loginPromise = Ember.$.ajax({
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
     let promise = Ember.$.ajax({
      url : this.host + "/login" ,
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader("Authorization", localStorage.getItem(ENV.TOKEN_KEY) );}
    });

    return promise;
   

  }

});

