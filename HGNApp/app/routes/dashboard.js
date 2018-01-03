import Ember from 'ember';
import UnAuthenticatedRouteMixin from '../mixins/un-authenticated-route-mixin';

export default Ember.Route.extend(UnAuthenticatedRouteMixin, {

  
  model(){
       
   return this.get('DataService').getDashboardData();
  },

  setupController: function(controller, model){

    controller.set('model', model);
    this.get('AuthService').getLoggedinUser()
   .then(this.get('DataService').getUserProfileData)
   .then(function(results){controller.set('userProfile', results);});
    
  },
  
});
