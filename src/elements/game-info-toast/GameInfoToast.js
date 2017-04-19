/**
 * Created by Denis on 19.04.2017.
 */
export default class GameInfoToast{
    constructor(node, health, login, position){
        this.node = node;
        this.health = health;
        this.login = login;
        this.position = position;
    }

    render(){
        this.el = document.createElement('div');

        if(this.position === 'left') {
            this.el.setAttribute('class', 'game-info-toast_left');
        } else {
            this.el.setAttribute('class', 'game-info-toast_right');
        }

        //TODO create canvas
        this.node.appendChild(this.el);
    }

    updateHealth(){

    }
}