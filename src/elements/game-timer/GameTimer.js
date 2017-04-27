/**
 * Created by Denis on 27.04.2017.
 */

import "./game-timer.scss";

export default class GameTimer {
    constructor(node) {
        this.node = node;
    }

    render() {
        this.container = document.createElement('div');
        this.node.appendChild(this.container);
        this.container.setAttribute('class', 'game-timer');

        this.timeText = document.createElement('h1');
        this.container.appendChild(this.timeText);
    }

    start() {
        return new Promise((resolve) => {
            this.timeDown = new Date().getTime();
            this.timeDown = this.timeDown + 30000;

            this.inteval = setInterval(() => {
                let now = new Date().getTime();
                let distance = this.timeDown - now;

                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                this.timeText.textContent = `00:${seconds}`;

                //console.warn(`00:${seconds}`);
                if (seconds <= 0) {
                    this.cancel();
                    resolve();
                }
            }, 1000);
        });
    }

    cancel() {
        clearInterval(this.inteval);
    }
}