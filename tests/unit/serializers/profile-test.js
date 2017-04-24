import { moduleForModel, test } from 'ember-qunit';

moduleForModel('profile', 'Unit | Serializer | profile', {
  // Specify the other units that are required for this test.
  needs: ['serializer:profile']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
