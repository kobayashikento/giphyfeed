import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the details layout', async function (assert) {
    await render(hbs`<Details />`);

    assert.dom('a').hasClass('details-container');
    assert.dom('a div').hasClass('details-upper-shadow');
    assert.dom('a div span').hasClass('details-title');
    assert.dom('a div div').hasClass('details-avatar-container');
    assert.dom('a div div img').exists();
    assert.dom('a div div span').hasClass('details-avatar-title');
  });

  test('it renders information about the gifs', async function (assert) {
    this.setProperties({
      gifData: {
        url: "https://giphy.com/gifs/GetPlume-plume-gsIDc6orZSYQ9MQQ62",
        title: "Trans Day Of Visibility GIF by Plume",
        user: {
          avatar_url: "https://media1.giphy.com/avatars/GetPlume/1N4sBtYIu91F.gif",
          display_name: "Plume",
        }
      }
    });

    await render(hbs`<Details @url={{this.gifData.url}} @title={{this.gifData.title}} @avatar_name={{this.gifData.user.display_name}}
    @avatar_url={{this.gifData.user.avatar_url}} />`);

    assert.dom('a').hasProperty('href', 'https://giphy.com/gifs/GetPlume-plume-gsIDc6orZSYQ9MQQ62')
    assert.dom('a div span').hasText('Trans Day Of Visibility GIF by Plume')
    assert.dom('a div div img').hasProperty('src', 'https://media1.giphy.com/avatars/GetPlume/1N4sBtYIu91F.gif')
    assert.dom('a div div span').hasText("Plume")
  });

});
