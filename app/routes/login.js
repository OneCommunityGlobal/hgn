//app/routes/login.js

import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend({
    UnauthenticatedRouteMixin,
//     actions:{
//     login(username,password){

//     if(username==='test'&& password==='test')   {
//          this.transitionTo('dashboard');
//      }
//      else if(username==='admin'&& password==='admin')   {
//          this.transitionTo('dashboard');
//      }
//      else{
//          alert("wrong username or password");
//      }
//     }
// }
});
