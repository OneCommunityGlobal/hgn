import Ember from 'ember';

export default Ember.Controller.extend({
   // session: Ember.inject.service('session'),
    hideHeaderRoutes: ['index','login'],
    isHeaderVisible: Ember.computed('currentRouteName', function(){
      return this.get('hideHeaderRoutes').indexOf(this.get('currentRouteName')) === -1;
    })
 
});

