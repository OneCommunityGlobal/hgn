import Ember from 'ember';
import UnAuthenticatedRouteMixin from '../mixins/un-authenticated-route-mixin';

export default Ember.Route.extend(UnAuthenticatedRouteMixin, {


  model(){

   return this.get('DataService').getDashboardData();
  },

  setupController: function(controller, model){
    this._super(...arguments);

    controller.set('model', model);
    this.get('AuthService').getLoggedinUser()
   .then(results => this.get('DataService').getUserProfileData(results))
<<<<<<< HEAD
   .then(function(results){controller.set('userProfile', results);});

=======
   .then(function(results){
     controller.set('userProfile', results);});
    
>>>>>>> 3af91dee592665e5bee5a05a3bd1d6f3212d7bf8
  },

});
