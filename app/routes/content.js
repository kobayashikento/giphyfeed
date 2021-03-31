import Route from '@ember/routing/route';
import ENV from 'giphyfeed/config/environment';

import { inject as service } from '@ember/service';

export default class ContentRoute extends Route {

    async model() {
        let responseSettings = await fetch('/api/settings/settings.json');
        let parsedSettings = await responseSettings.json();

        let type = parsedSettings.data.attributes.type;
        let token = encodeURIComponent(ENV.GIPHY_API_KEY);
        let limit = parsedSettings.data.attributes.limit;
        let rating = parsedSettings.data.attributes.rating;

        let response = await fetch(`https://api.giphy.com/v1/gifs/${type}?api_key=${token}&limit=${limit}&rating=${rating}`)
        let parsed = await response.json();

        return {
            settings: parsedSettings,
            data: parsed.data
        }
    }
}
