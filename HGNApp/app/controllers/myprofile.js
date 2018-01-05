import Ember from 'ember';

export default Ember.Controller.extend({

    userrole : "",
    userId : "",
    self : this,
    
    isUserAdministrator : Ember.computed('userrole', function(){

        let userrole = this.get('userrole');
        return userrole === "Administrator" ? true: false;

    }),
    actions: {


        postChanges(){
            let userId = this.get('userId');
            let user = this.get('model');

            this.get('DataService').saveUserProfileData(user,userId)
            .then(alert("Changes Saved!!!"));
        },
        discardChanges(){
            this.self.transitionToRoute('dashboard');

        }
    }
  
    
    
    });
