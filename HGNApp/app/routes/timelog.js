import Ember from 'ember';
import UnAuthenticatedRouteMixin from '../mixins/un-authenticated-route-mixin';

export default Ember.Route.extend(UnAuthenticatedRouteMixin,{
  model(){ 
  
  },

   setupController: function(controller, model){
     
    let user = this.get('loggedinUser');
    controller.set('loggedinUser', this.loggedinUser);  
     },


});


