import Ember from 'ember';
import UnAuthenticatedRouteMixinMixin from 'hgnapp/mixins/un-authenticated-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | un authenticated route mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let UnAuthenticatedRouteMixinObject = Ember.Object.extend(UnAuthenticatedRouteMixinMixin);
  let subject = UnAuthenticatedRouteMixinObject.create();
  assert.ok(subject);
});
