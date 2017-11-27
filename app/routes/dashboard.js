import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model(){
    
    var data = this.get('datastore').getDashboardData();
    
    console.log("some data"+ data[0]);
    
    return data;
    }
});
