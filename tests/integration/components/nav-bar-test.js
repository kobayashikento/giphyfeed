import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | navbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with a logo and link to', async function (assert) {
    await render(hbs `<NavBar />`)
    assert.dom('nav').hasClass('navbar')
    assert.dom('nav div').hasClass('navbar-title')

    assert.dom('nav a img').exists()
  });
});
