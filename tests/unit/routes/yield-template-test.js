import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | yield-template', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:yield-template');
    assert.ok(route);
  });
});
