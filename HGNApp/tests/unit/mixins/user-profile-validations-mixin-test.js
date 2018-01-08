import Ember from 'ember';
import UserProfileValidationsMixinMixin from 'hgnapp/mixins/user-profile-validations-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | user profile validations mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let UserProfileValidationsMixinObject = Ember.Object.extend(UserProfileValidationsMixinMixin);
  let subject = UserProfileValidationsMixinObject.create();
  assert.ok(subject);
});
