import Ember from 'ember';

export default Ember.Mixin.create({

  loggedinUser: {},
  beforeModel() {

  

    if (!this.get('AuthService').isAuthenticated()) {
      alert("Please login into the application before using it");
      this.transitionTo('login');
    }

  } ,

    setupController: function(controller, model){

      controller.set('model', model);
      this.get('AuthService').getLoggedinUser()
      .then(function(results){
        controller.set('userrole', results.role);
        controller.set('userId', results.requestorId);
        });
      
    }
});
