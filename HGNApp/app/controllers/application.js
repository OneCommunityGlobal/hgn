import Ember from 'ember';

export default Ember.Route.extend({

    hideHeaderRoutes: ['index', 'login'],
    isHeaderVisible: Ember.computed('currentRouteName', function () {
      return this.get('hideHeaderRoutes').indexOf(this.get('currentRouteName')) === -1;
    })

  }
);
