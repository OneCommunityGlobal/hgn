import Ember from 'ember';
import UnAuthenticatedRouteMixin from '../mixins/un-authenticated-route-mixin';

export default Ember.Route.extend(UnAuthenticatedRouteMixin, {
<<<<<<< HEAD
//Testing My changes
=======
>>>>>>> ee5995e8b3739685d9173ecdae6762ad50f0c42a

  model(){

   return this.get('AuthService').getLoggedinUser()
   .then(results => {this.get('DataService').getDashboardData(results);});
   
  },

  setupController: function(controller, model){
    this._super(...arguments);

    controller.set('model', model);
    this.get('AuthService').getLoggedinUser()
   .then(results => this.get('DataService').getUserProfileData(results))
   .then(function(results){controller.set('userProfile', results);});

  },

});
