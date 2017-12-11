import Ember from 'ember';

export default Ember.Controller.extend({
    selectedOption: null,

    actions: {
        setSelection: function (selected) {
            this.set('selectedOption', selected);
            this.set('role', selected);
        },
        save: function () {
            var userName = this.get('userName');
            var firstName = this.get('firstName');
            var lastName = this.get('lastName');
            var email = this.get('email');
            var contact = this.get('phone');
            var role = this.get('role');

            var user = this.store.createRecord('user', {
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                email: email,
                contact: contact,
                role: role
            });

            user.save();
            this.set('userName', '');
            this.set('firstName', '');
            this.set('lastName', '');
            this.set('email', '');
            this.set('phone', '');
            this.set('selectedOption', "-- Select --");
            this.set('closemodal', "modal");

            this.transitionToRoute('user');


        },

        editRow: function (user) {
            this.set('userName', user.get('userName'));
            this.set('firstName', user.get('firstName'));
            this.set('lastName', user.get('lastName'));
            this.set('email', user.get('email'));
            this.set('phone', user.get('contact'));
            this.set('role', user.get('role'));
            this.set('id', user.get('id'));
        },
        update: function () {
            var userName = this.get('userName');
            var firstName = this.get('firstName');
            var lastName = this.get('lastName');
            var email = this.get('email');
            var contact = this.get('phone');
            var role = this.get('role');
            this.get('store').findRecord('user', this.get('id')).then(function (user) {
                user.set('userName',userName);
                user.set('firstName',firstName);
                user.set('lastName', lastName);
                user.set('email', email);
                user.set('phone', contact);
                user.set('role', role);
                user.save();
            });
            this.set('closemodal', "modal");
        }

    }



});
