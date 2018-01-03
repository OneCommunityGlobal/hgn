import Ember from 'ember';

export default Ember.Mixin.create({

  loggedinUser: {},
  beforeModel() {

  

    if (!this.get('AuthService').isAuthenticated()) {
      alert("Please login into the application before using it");
      this.transitionTo('login');
    }

  }
});
