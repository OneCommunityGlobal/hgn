import Ember from 'ember';
import ENV from '../config/environment';


export default Ember.Controller.extend({

  actions: {
    login() {

      let email = this.get('email');
      let password = this.get('password');
      let self = this;
      let logindata = {
        "email": email,
        "password": password
      };

      
      let loginPromise = this.get('AuthService').login(logindata);

      loginPromise
         .done(function (result) {
          localStorage.setItem(ENV.TOKEN_KEY, result);
            self.transitionToRoute('dashboard');
        })
        .error(function(error){
          alert("Invalid credentials");
        })
       
    }
  }

});
