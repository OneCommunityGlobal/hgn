import Ember from 'ember';

export default Ember.Component.extend({
  isProjectDetail: false,
  actions: {
    toggleProjectDetail() {
      this.toggleProperty('isProjectDetail');
    }
  }
});
