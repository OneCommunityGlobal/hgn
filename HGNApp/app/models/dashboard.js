import Ember from 'ember';

//import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend( {

  datastoreService : Ember.inject.service("datastore-service"),

  model(){
    return this.get('datastoreService').getDashboardData();
    }
});