import Ember from 'ember';
import UserProfileValidationMixin from '../mixins/user-profile-validation-mixin';



export default Ember.Controller.extend(UserProfileValidationMixin,{

  self: this,

  isUserAdministrator: Ember.computed('userrole', function () {

    let userrole = this.get('userrole');
    return userrole === "Administrator" ? true : false;

  }),

  actions: {

    postChanges() {
      let userId = this.get('userId');
      let user = this.get('model');

      this.validate()
      .then(()=> {
          this.get('DataService').saveUserProfileData(user, userId)
         .then(alert("Saved"));
        })
      .catch(console.log(this.get("errors")));
 
    },
    discardChanges() {
      this.self.transitionToRoute('dashboard');

    }
  }



});
