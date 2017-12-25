import Ember from 'ember';

export default Ember.Service.extend({

  login(data) {

    Ember.$.ajax({
      url: "http://localhost:4500/api/login",
      type: "POST",
      data: data
    })
    .done(function(result){
        console.log(result);
    localStorage.setItem("token", result);
    });

  }
});
