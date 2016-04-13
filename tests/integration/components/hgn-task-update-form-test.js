import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hgn-task-update-form', 'Integration | Component | hgn task update form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hgn-task-update-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hgn-task-update-form}}
      template block text
    {{/hgn-task-update-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
