import Ember from 'ember';

export default Ember.Controller.extend({
    selectedOption: null,

    newUser: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
        phoneNumber: "",
        weeklyCommittedHours: ""
    },

    actions: {
        setSelection: function (selected) {
            this.set('selectedOption', selected);
        },

        saveNewUser: function () {
            let user = this.get('newUser');
            this.get('model').addObject(user);  
            this.get('userProfileService').postUserProfileData(user)
                .then(alert("saved"));
            this.set('newUser', {});
        }

    }
});