import Ember from 'ember';

export default Ember.Mixin.create({
    loginService: Ember.inject.service('login-service'),

beforeModel()
  {
   
    if(!this.get('loginService').isAuthenticated())
    {
      alert("Please login into the application before using it");
        this.transitionTo('login');
    }
}
});
