import Ember from 'ember';

export default Ember.Route.extend({
  roleTextboxHide: false,
    model(){
      return this.store.findAll('user');
    }
    
});
