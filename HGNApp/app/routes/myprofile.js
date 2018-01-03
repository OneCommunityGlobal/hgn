import Ember from 'ember';
import UnAuthenticatedRouteMixin from '../mixins/un-authenticated-route-mixin';

export default Ember.Route.extend(UnAuthenticatedRouteMixin, {
     model()
    {
    return this.get('AuthService').getLoggedinUser()
      .then(this.get('DataService').getUserProfileData);
       
    },

    setupController: function(controller, model){

      controller.set('model', model);
      this.get('AuthService').getLoggedinUser()
      .then(function(results){
        controller.set('userrole', results.role);
        controller.set('userId', results.requestorId);
        });
      
    },

    


});
