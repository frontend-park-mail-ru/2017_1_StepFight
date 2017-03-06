/**
 * Created by Denis on 06.03.2017.
 */
import Button from './btn'
export default class Profile {
    constructor(options = {data: {}}) {
        this.data = options.data;

        this.pLogin = document.createElement('h3');
        this.pRating = document.createElement('h3');
        this.pButton = null;
        this.div = options.data.div;

        this.render();
    }

    render() {
        this.pLogin.textContent = `Login: ${this.data.login}`;
        this.pRating.textContent = `Score: ${this.data.rating}`;
        this.pButton = new Button(this.data.button).render();

        this.div.appendChild(this.pLogin);
        this.div.appendChild(this.pRating);
        this.div.appendChild(this.pButton.el);
    }
}


