import Ember from 'ember';

export default Ember.Controller.extend({
    
    userProfile :{},

     
    
    actions :{

        MyProfile(){
               
          this.transitionToRoute('myprofile');
      }
      
      }

});
