import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | navigation-bar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:navigation-bar');
    assert.ok(route);
  });
});
