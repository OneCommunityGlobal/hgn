import Ember from 'ember';
import UnAuthenticatedRouteMixin from '../mixins/un-authenticated-route-mixin';

export default Ember.Route.extend(UnAuthenticatedRouteMixin,{

    model()
    {
        let user = this.get('loggedinUser');
        return this.get('DataService').getUnreadNotifications(user)
        
    }
});
