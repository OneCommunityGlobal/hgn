import Ember from 'ember';


export default Ember.Controller.extend({
    loginService: Ember.inject.service("login-service"),
    actions: {
      login() {
        
        let userName = this.get('userName');
        let password = this.get('password');
        let self = this;
        let logindata = {
          "userName": userName,
          "password": password
        };
  
        let loginPromise = this.get('loginService').login(logindata);
  
        console.log(loginPromise);
        loginPromise
          .done(function (result) {
             localStorage.setItem("token", result);
            self.transitionToRoute('dashboard');
  
          })
          .fail(            
            function () {
                self.transitionToRoute('login');
                }
          );
      }
    }

});
