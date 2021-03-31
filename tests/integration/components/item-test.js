import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the item layout', async function (assert) {
    await render(hbs`<Item />`);

    assert.dom('a').exists();
    assert.dom('a img').exists();
  });

  test('it renders the item  with specified parameters', async function (assert) {
    this.setProperties({
      gifData: {
        id: 'euGq9pgXoOVJcVhwRF',
        title: 'Meme Dancing GIF',
        url: 'https://giphy.com/gifs/dancing-kermit-euGq9pgXoOVJcVhwRF'
      }
    });

    await render(hbs`<Item @id={{this.gifData.id}} @title={{this.gifData.title}} @url={{gifData.url}}/>`);
  
    assert.dom('a').hasProperty('href', 'https://giphy.com/gifs/dancing-kermit-euGq9pgXoOVJcVhwRF')
    assert.dom('a img').hasProperty('src', 'https://i.giphy.com/euGq9pgXoOVJcVhwRF.gif')
    assert.dom('a img').hasProperty('alt', 'Meme Dancing GIF')
  });
});
