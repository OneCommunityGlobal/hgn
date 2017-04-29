import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return{
      UserName:'UserName',
      profilePic:'https://addons.cdn.mozilla.net/static//img/zamboni/anon_user.png',
      Role:'Administrator'
    };
  }

});
