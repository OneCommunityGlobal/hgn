import Ember from 'ember';
import UserProfileValidationMixinMixin from 'hgnapp/mixins/user-profile-validation-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | user profile validation mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let UserProfileValidationMixinObject = Ember.Object.extend(UserProfileValidationMixinMixin);
  let subject = UserProfileValidationMixinObject.create();
  assert.ok(subject);
});
