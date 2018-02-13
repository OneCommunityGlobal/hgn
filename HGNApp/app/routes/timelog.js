import Ember from 'ember';
import UnAuthenticatedRouteMixin from '../mixins/un-authenticated-route-mixin';

export default Ember.Route.extend(UnAuthenticatedRouteMixin,{
  model(){ 
  
  },

   setupController: function(controller, model){
     
    let user = this.get('loggedinUser');
    controller.set('loggedinUser', this.loggedinUser);

     this.get('DataService').getUnreadNotifications(user)
     .then(results => { controller.set('notifications', results);});
    
     
     this.get('userProfileService').getTeamMembers(user)
        .then(results => { controller.set('teamMembers', results);})

        this.get('DataService').getActionItems(user)
        .then(results => { controller.set('actionItems', results);})
   },


});


