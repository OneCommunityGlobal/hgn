import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hgn-badges', 'Integration | Component | hgn badges', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hgn-badges}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hgn-badges}}
      template block text
    {{/hgn-badges}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
