import Ember from 'ember';


export default Ember.Controller.extend({
  loginService: Ember.inject.service("login-service"),
  isAuthenticated: false,
  nextroute: "",
   actions: {
    login() {
    
      let userName=   this.get('userName');
      let password = this.get('password');
      let logindata = {
        "userName": userName,
        "password": password
      };
      let self = this;

      let loginpromise = this.get('loginService').post(logindata);

      loginpromise
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
