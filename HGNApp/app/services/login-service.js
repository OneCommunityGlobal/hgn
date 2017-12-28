import Ember from 'ember';
import ENV from '../config/environment';
export default Ember.Service.extend({

 host: ENV.webServer,
 TOKEN_KEY : "token",
  
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
    return (!!localStorage.getItem(this.TOKEN_KEY));

  },
  logout()
  {
    localStorage.removeItem(this.TOKEN_KEY);
  }

});

