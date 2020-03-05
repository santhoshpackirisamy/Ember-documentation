import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | helper-template', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:helper-template');
    assert.ok(route);
  });
});
