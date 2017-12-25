import Ember from 'ember';


//import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend( {

  model(){
    return this.get('datastore').getDashboardData();
  }
});
