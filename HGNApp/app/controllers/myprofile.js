import Ember from 'ember';
import UserProfileValidationMixin from '../mixins/user-profile-validation-mixin';



export default Ember.Controller.extend(UserProfileValidationMixin,{

  self: this,
  newPersonalLink : {
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
      .then(()=> {
          this.get('DataService').saveUserProfileData(user, userId)
         .then(alert("Saved"));
        })
      .catch(console.log(this.get("errors")));
 
    },

    addPersonalLink()
    {
      
      let newLink = this.get('newPersonalLink');
      this.get('model.personalLinks').addObject(newLink);

      this.set('newPersonalLink',{
        Name: "",
        Link: ""
      } );
    }
  
  }



});
