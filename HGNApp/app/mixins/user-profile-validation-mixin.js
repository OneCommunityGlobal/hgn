import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Mixin.create(EmberValidations, {

  validations: {
    "model.firstName": {
      presence: true,
      length: {
        minimum: 2,
        maximum: 300
      }
    },
    "model.lastName": {
      presence: true,
      length: {
        minimum: 2,
        maximum: 300
      }
    },
    "model.email": {
      presence: true,
      format: /.+@.+\..{2,4}/
    },
    "model.role": {
      inclusion: { in: ['Volunteer', 'Manager', 'Administrator', 'Core Team']
      }
    },
    "model.userName": {
      presence: true
    },
    "model.password": {
      presence: true,
      length: {
        minimum: 8
      }
    },
    "model.isActive": {
      inlcusion: { in: [true, false]
      }
    },
    "model.weeklyComittedHours": {
      presence: true,
      numericality: {
        greaterThanOrEqualTo: 0
      }
    },
    "newPersonalLink.Name": {
        presence: true, length: {minimum:1}      
    },
    "newPersonalLink.Link": {
        presence: true, length: {minimum:1}      
    }
  }
});
