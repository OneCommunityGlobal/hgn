import Ember from 'ember';
import UnAuthenticatedRouteMixin from '../mixins/un-authenticated-route-mixin';

//import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(UnAuthenticatedRouteMixin, {

  
  loginService: Ember.inject.service('login-service'),
  datastore: Ember.inject.service('datastore-service'), 


  model(){
    return this.get('datastore').getDashboardData();
  },

  setupController: function(controller, model){

    controller.set('model', model);
     this.get('loginService').getLoggedinUser()
    .then(this.get('datastore').getUserProfileData)
   .then(function(results){controller.set('userProfile', results);})
    
  }
});
