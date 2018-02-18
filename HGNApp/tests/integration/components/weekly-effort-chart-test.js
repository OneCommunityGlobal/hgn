import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('weekly-effort-chart', 'Integration | Component | weekly effort chart', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{weekly-effort-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#weekly-effort-chart}}
      template block text
    {{/weekly-effort-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
