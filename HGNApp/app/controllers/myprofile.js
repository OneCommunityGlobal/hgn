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
  newProfilePic : "",
  newLinkformValidate : false,

  isUserAdministrator: Ember.computed('userrole', function () {

    let userrole = this.get('userrole');
    return userrole === "Manager" ? true : false;

  }),

  actions: {

    updateProfilePic:  function(event) {
      const reader = new FileReader();
      const file = event.target.files[0];
      let imageData;
  
      reader.onload = () => {
        imageData = reader.result;
        this.set('model.profilePic', imageData); 
        
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    },
   

    postChanges() {
      let userId = this.get('userId');
      let user = this.get('model');

      this.validate()
        .then(() => {this.get('userProfileService').editUserProfileData(user, userId)})
        .then(results => {
         
          toastr.success("", 'Changes Saved');
      }, error => {
          console.log(error);
          toastr.warning(error.responseJSON.message,'Error!!' );});
                
        

    },

    addPersonalLink() {
      
      this.set('newLinkformValidate' ,true);

     this.validate()
     .then(() => {
       this.get('model.personalLinks').addObject(this.get('newPersonalLink'));
       this.set('newPersonalLink', {});
       this.set('newLinkformValidate' ,false);
     })
     .catch(() => {
           this.set('showFormErrors' , true);
     })
     
     ;
   
    },

    CancelAddingPersonalLink()
{
  this.set('newLinkformValidate' ,false);
  this.set('newPersonalLink', {});
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
