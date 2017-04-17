/**
 * Created by Denis on 02.04.2017.
 */
export default class MultiPlayerStrategy{
    constructor(scene, manager) {
        this.scene = scene;
        this.manager = manager;
    }

    gameLoop(){

    }

    startGameLoop() {
        this.inteval = setInterval(() => this.gameLoop(), 100);
    }

    finishGameLoop(){
        clearInterval(this.inteval);
    }
}