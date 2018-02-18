import Ember from 'ember';

export default Ember.Component.extend({

    showNotifications : false,
    loginService : Ember.inject.service("login-service"),
         actions:{

        

        logout()
        {
            this.get('loginService').logout();

        }





    }

});
