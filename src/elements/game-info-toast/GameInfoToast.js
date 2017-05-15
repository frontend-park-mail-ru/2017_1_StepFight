/**
 * Created by Denis on 19.04.2017.
 */
import './game-info-toast.scss';

export default class GameInfoToast {
    constructor(node, health, login, position) {
        this.node = node;
        this.health = health;
        this.login = login;
        this.position = position;
        this.healthConst = 2.4;
    }

    render() {
        this.el = document.createElement('div');

        if (this.position === 'left') {
            this.el.setAttribute('class', 'game-info-toast_left');
        } else {
            this.el.setAttribute('class', 'game-info-toast_right');
        }

        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('class', 'game-info-toast__canvas');
        this.el.appendChild(this.canvas);

        /*if(this.canvas.getContext) {
         let context = this.canvas.getContext('2d');
         context.font = '32px Orbitron';
         context.fillText(`${this.login}`, 80,35);

         context.beginPath();
         context.rect(30, 50, this.health*this.healthConst, 30);
         context.closePath();
         context.fillStyle = 'red';
         context.fill();

         context.fillText(`Health: ${this.health}`, 70,130);
         }*/
        this.updateHealth(100);

        this.node.appendChild(this.el);
    }

    updateHealth(hp) {
        this.health = hp;
        if (this.canvas.getContext) {
            let context = this.canvas.getContext('2d');
            context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            context.fillStyle = 'black';
            context.font = '32px Orbitron';
            context.fillText(`${this.login}`, 30, 35);

            context.beginPath();
            context.rect(30, 50, this.healthConst * this.health, 30);
            context.closePath();
            context.fillStyle = 'red';
            context.fill();

            context.fillText(`Health: ${this.health}`, 50, 130);
        }
    }
}