import Ember from 'ember';

export default Ember.Component.extend({
    
   actions :
   {
       gotoMyProfile : function()
       {
        
        this.sendAction('MyProfile');
       }
   }
  
});
