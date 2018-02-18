import Ember from 'ember';

export default Ember.Controller.extend({

  dataService: Ember.inject.service("datastore-service"),
  hideHeaderRoutes: ['index', 'login'],
  isHeaderVisible: Ember.computed('currentRouteName', function () {
    return this.get('hideHeaderRoutes').indexOf(this.get('currentRouteName')) === -1;
  }),

  isUserAdministrator: Ember.computed('userrole', function () {
    let userrole = this.get('userrole');
    return userrole === "Administrator" ? true : false;
  }),

  // notifications: Ember.computed('loggedinUser', function(){
  //   this.get('dataService').getUnreadNotifications(this.get('loggedinUser'))
  //       .then(results => { this.set('notifications', results);

  // })}),

  actions: {


    
  }


}
);
