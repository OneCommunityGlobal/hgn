import Ember from 'ember';

export default Ember.Component.extend({
    loginservice : Ember.inject.service("login"),
    actions: {
        login()
        {
            var data= JSON.stringify({
                
                  "useName": this.get('userName'), // you're getting this property from the controller now
                  "password": this.get('password')
        });

            this.get('loginservice').login(data);
        }
    }
});
