import Ember from 'ember';

export default Ember.Controller.extend({

  hideHeaderRoutes: ['index', 'login'],
  isHeaderVisible: Ember.computed('currentRouteName', function () {
    return this.get('hideHeaderRoutes').indexOf(this.get('currentRouteName')) === -1;
  }),

  isUserAdministrator: Ember.computed('userrole', function () {
    let userrole = this.get('userrole');
    return userrole === "Administrator" ? true : false;
  }),

  notifications : Ember.computed('userId', function(){

   let userid = this.get('userId')
   alert(this.get('userId'));
    return this.get('DataService').getUnreadNotifications(userid);


  })


}
);
