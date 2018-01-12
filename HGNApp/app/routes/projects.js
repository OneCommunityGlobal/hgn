import Ember from 'ember';
import UnAuthenticatedRouteMixin from '../mixins/un-authenticated-route-mixin';

export default Ember.Route.extend(UnAuthenticatedRouteMixin, {
  model() {
    return this.get('AuthService').getLoggedinUser()
      .then(results => this.get('DataService').getProjectData(results));
  }
});
