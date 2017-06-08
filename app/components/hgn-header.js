import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service('session'),
    actions: {
      logout() {
        this.get('session').invalidate();
      }
    }
});
