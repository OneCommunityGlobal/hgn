import Ember from 'ember';
import UnAuthenticatedRouteMixin from '../mixins/un-authenticated-route-mixin';

export default Ember.Route.extend(UnAuthenticatedRouteMixin, {

  model(){  
     return this.get('DashboardService').getDashboardData(this.loggedinUser);
    },

    // setupController: function(controller, model){
     
    //   let user = this.get('loggedinUser');
    //   controller.set('loggedinUser', this.loggedinUser);  
    //   controller.set('model', model)
    //    },

});
