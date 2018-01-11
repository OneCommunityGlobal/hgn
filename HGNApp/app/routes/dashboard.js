import Ember from 'ember';
import UnAuthenticatedRouteMixin from '../mixins/un-authenticated-route-mixin';

export default Ember.Route.extend(UnAuthenticatedRouteMixin, {
//Testing

  model(){

   return this.get('DataService').getDashboardData();
  },

  setupController: function(controller, model){
    this._super(...arguments);

    controller.set('model', model);
    this.get('AuthService').getLoggedinUser()
   .then(results => this.get('DataService').getUserProfileData(results))
   .then(function(results){controller.set('userProfile', results);});

  },

});
