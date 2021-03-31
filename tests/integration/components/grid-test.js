import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | grid', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the grid layout', async function (assert) {
    await render(hbs`<Grid />`);

    assert.dom('div').hasClass('masonry-with-columns');
  });
});
