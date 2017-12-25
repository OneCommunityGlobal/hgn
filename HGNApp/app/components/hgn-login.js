import Ember from 'ember';

export default Ember.Component.extend({
    loginservice : Ember.inject.service("login"),
    actions: {
        login(userName, password)
        {
            var data = {
                "userName": userName,
                "password" : password
            };
           this.get('loginservice').login(data);

           
        }
    }
});
