import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hgn-profilebox', 'Integration | Component | hgn profilebox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hgn-profilebox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hgn-profilebox}}
      template block text
    {{/hgn-profilebox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
