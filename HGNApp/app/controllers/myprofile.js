import Ember from 'ember';

export default Ember.Controller.extend({

   
    self : this,
    
    isUserAdministrator : Ember.computed('userrole', function(){

        let userrole = this.get('userrole');
        return userrole === "Administrator" ? true: false;

    }),

    isFormValid : function(){

        let isFormValid = true;
        let errors = [];

        let firstName = this.get("firstName");
        alert(firstName);
        let lastName = this.get("lastName");

        if(firstName.length <3)
           { isFormValid = false;
              errors.push("First Name is mandatory");
        }
        if(lastName.length <3)
           { isFormValid = false;
              errors.push("Last Name is mandatory");
        }

        return {isFormValid, errors};

        


    },

    actions: {


        postChanges(){
            let userId = this.get('userId');
            let user = this.get('model');

            let {isFormValid, errors} = this.isFormValid();

            if(isFormValid)
            {
                this.get('DataService').saveUserProfileData(user,userId)
            .done(alert("Changes Saved!!!"))
            .fail((error) => alert (error));

            }
            else
            {
                alert("Please fix errors" +errors);

            }
        },
        discardChanges(){
            this.self.transitionToRoute('dashboard');

        }
    }
  
    
    
    });
