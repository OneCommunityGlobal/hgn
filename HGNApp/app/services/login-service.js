import Ember from 'ember';
import ENV from '../config/environment';
export default Ember.Service.extend({

 host: ENV.webServer,
  
  post(data) {

    

    let loginpromise =  Ember.$.ajax({
      url: this.host +"/login",
      type: "POST",
      data: data
    });

 return loginpromise;
    
    

  }
});

