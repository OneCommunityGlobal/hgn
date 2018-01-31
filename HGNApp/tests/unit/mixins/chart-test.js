import Ember from 'ember';
import ChartMixin from 'hgnapp/mixins/chart';
import { module, test } from 'qunit';

module('Unit | Mixin | chart');

// Replace this with your real tests.
test('it works', function(assert) {
  let ChartObject = Ember.Object.extend(ChartMixin);
  let subject = ChartObject.create();
  assert.ok(subject);
});
