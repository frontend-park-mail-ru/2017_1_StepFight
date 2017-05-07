/**
 * Created by Denis on 07.05.2017.
 */
import "./music-controls.scss";
export default class MusicControls {
    constructor() {
        this.musicElement = document.getElementById('music-bg');
    }

    render() {
        this.button = document.createElement('div');
        this.button.setAttribute('class', 'music-controls music-controls_on');
        document.body.appendChild(this.button);

        this.button.addEventListener('click', (event) => {
            if (this.musicElement.paused) {
                this.musicElement.play();
                this.button.classList.remove('music-controls_off');
                this.button.classList.add('music-controls_on');
            } else {
                this.musicElement.pause();
                this.button.classList.remove('music-controls_on');
                this.button.classList.add('music-controls_off');
            }
        });
    }
}