import Ember from 'ember';

export default Ember.Component.extend({

    showNotifications : false,
    loginService : Ember.inject.service("login-service"),
    dataService: Ember.inject.service("datastore-service"),

    init()
    {
        this._super(...arguments);
        if(this.get('loggedinUser')){
        this.get('dataService').getUnreadNotifications(this.get('loggedinUser'))
        .then(results => { this.set('notifications', results);})
        }
    },

      actions:{

        

        logout()
        {
            this.get('loginService').logout();

        }





    }

});
