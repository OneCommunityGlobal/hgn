import Ember from 'ember';
import UserProfileValidationMixin from '../mixins/user-profile-validation-mixin';



export default Ember.Controller.extend(UserProfileValidationMixin,{

  self: this,

  isUserAdministrator: Ember.computed('userrole', function () {

    let userrole = this.get('userrole');
    return userrole === "Administrator" ? true : false;

  }),

  actions: {

    personalLinksName: "",
    personalLinksLink : "",

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

    addPersonalLink()
    {
      let linkName = this.get("newLinkName");
      let linkLink = this.get("newLinkLink");
     
      let newLink = {
        Name: linkName,
        Link: linkLink
      };

      alert(newLink.Name);
      this.get('model.personalLinks').addObject(newLink);

     
      
    }
  
  }



});
