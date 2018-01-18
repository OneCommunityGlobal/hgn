import Ember from 'ember';
import UserProfileValidationMixin from '../mixins/user-profile-validation-mixin';



export default Ember.Controller.extend(UserProfileValidationMixin, {

  self: this,
  showErrors : true,
  showFormErrors: false,
  newPersonalLink: {
    Name: "",
    Link: ""
  },
  newAdminLink: {
    Name: "",
    Link: ""
  },

  isUserAdministrator: Ember.computed('userrole', function () {

    let userrole = this.get('userrole');
    return userrole === "Administrator" ? true : false;

  }),

  actions: {

    postChanges() {
      let userId = this.get('userId');
      let user = this.get('model');

      this.validate()
        .then(() => {
          this.get('DataService').saveUserProfileData(user, userId)
            .then(alert("Saved"));
        })
        .catch(console.log(this.get("errors")));

    },

    addPersonalLink() {

      alert(this.model);
   
     this.validate()
     .then(function(results) {
       alert(results);
      this.get('model.personalLinks').addObject(this.get('newPersonalLink'));
      this.set('newPersonalLink', {});
     })
     .catch((errors) => {
       console.log(errors);
      this.set('showFormErrors' , true);
     });
   
    },
    

    removePersonalLink(personallink) {
      this.get('model.personalLinks').removeObject(personallink);
    },
    addAdminLink() {

      let newLink = this.get('newAdminLink');

      if (newLink.Name.length < 1 || newLink.Link.length < 1 || !this.isUserAdministrator) {

      } else {
        this.get('model.adminLinks').addObject(newLink);

        this.set('newAdminLink', {});
      }


    },
    removeAdminLink(adminLink) {
      if (this.isUserAdministrator) {
        this.get('model.adminLinks').removeObject(adminLink);
      }
    }

  }



});
