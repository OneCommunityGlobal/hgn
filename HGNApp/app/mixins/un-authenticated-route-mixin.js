import Ember from 'ember';

export default Ember.Mixin.create({

  loggedinUser: {},
  beforeModel() {  

    if (!this.get('AuthService').isAuthenticated()) {
      alert("Please login into the application before using it");
      this.transitionTo('login');
    }
    
   return this.get('AuthService').getLoggedinUser()
    .then(results => {this.loggedinUser = results;
     });   
   
  } ,

    setupController: function(controller, model){

      controller.set('model', model);
      controller.set('loggedinUser', this.loggedinUser);
      controller.set('userrole', this.loggedinUser.role);
      controller.set('userId', this.loggedinUser.requestorId);
   
      
    }
});
