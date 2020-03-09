import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | single-post', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:single-post');
    assert.ok(route);
  });
});
