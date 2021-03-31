import Component from '@glimmer/component';

export default class ItemComponent extends Component {
    get src() {
        let data = this.args;
        // example url https://i.giphy.com/kH78ASiw737uGac1JX.gif 
        return {
            url: `https://i.giphy.com/${data.id}.gif`,
            alt: data.title,
            src: data.url
        }
    }

}
