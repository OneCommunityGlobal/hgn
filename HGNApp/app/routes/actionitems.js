import Ember from 'ember';
import UnAuthenticatedRouteMixin from '../mixins/un-authenticated-route-mixin';


export default Ember.Route.extend(UnAuthenticatedRouteMixin,{
    model()
    {
        return this.get('DataService').getActionItems(this.loggedinUser);
    },

    setupController : function(controller, model){

        let user = this.get('loggedinUser');
        controller.set('model', model);
        this.get('userProfileService').getTeamMembers(user)
        .then(results => { controller.set('teammembers', results);});
        }

    
});
