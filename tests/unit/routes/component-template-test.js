import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | component-template', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:component-template');
    assert.ok(route);
  });
});
