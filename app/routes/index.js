import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
    @service store;

    async model() {
        return {
            title: "GiphyFeed with Ember",
            type: "trending",
            limit: 25,
            rating: "g"
        }
    }
}