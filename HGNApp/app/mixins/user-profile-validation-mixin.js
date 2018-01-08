import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Mixin.create(EmberValidations,{

    validations : {
        "model.firstName" : {presence : true, length : {minimum :2, maximum : 300} },
        "model.lastName" : {presence : true, length : {minimum :2, maximum: 300} },
        "model.email" : {presence : true },
        "model.role" : {inclusion: { in: ['Volunteer', 'Manager', 'Administrator', 'Core Team'] }},
        "model.userName" : {presence: true},
        "model.isActive" : {inlcusion : {in : [true, false]}}
      },
});
