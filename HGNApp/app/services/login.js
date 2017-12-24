import Ember from 'ember';

export default Ember.Service.extend({

    login(data){

        Ember.$.ajax({
            url: "http://localhost:4500/api/login",
            type: "POST",
            data: data
          }).then(function(resp){
            console.log(`token is ${resp}`);
          }).catch(function(error){
            console.log(`token is ${error}`);
          });

        

    }
    

});
