import Ember from 'ember';

export default Ember.Controller.extend({


  self: this,

  isUserAdministrator: Ember.computed('userrole', function () {

    let userrole = this.get('userrole');
    return userrole === "Administrator" ? true : false;

  }),

  isFormValid: function (user) {

    let isFormValid = true;
    let errors = [];

    if(user.firstName.length ===0 || user.firstName == null)
    {
        isFormValid = false;
        errors.push("First Name is a mandatory field");
    }
    if(user.firstName.length ===0 || user.firstName == null)
    {
        isFormValid = false;
        errors.push("First Name is a mandatory field");
    }

    if(user.email.length ===0 || user.firstName == null)
    {
        isFormValid = false;
        errors.push("First Name is a mandatory field");
    }




    return {
      isFormValid,
      errors
    };




  },

  actions: {


    postChanges() {
      let userId = this.get('userId');
      let user = this.get('model');

      let {
        isFormValid,
        errors
      } = this.isFormValid(user);

      if (isFormValid) {
        this.get('DataService').saveUserProfileData(user, userId)
          .done(alert("Changes Saved!!!"))
          .fail((error) => alert(error));

      } else {
        alert("Please fix errors" + errors);

      }
    },
    discardChanges() {
      this.self.transitionToRoute('dashboard');

    }
  }



});
