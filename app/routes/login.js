import Ember from 'ember';

export default Ember.Route.extend({
    actions:{
    login(username,password){
        
    if(username=='test'&& password=='test')   {
         this.transitionTo('dashboard');
     }
     else if(username=='admin'&& password=='admin')   {
         this.transitionTo('dashboard');
     }
     else{
         alert("wrong username or password");
     }
    }
}
});
