/**
 * Created by Denis on 02.04.2017.
 */
export default class MultiPlayerStrategy{
    constructor(scene, manager) {
        this.scene = scene;
        this.manager = manager;
    }

    /**
     * Игровой цикл
     */
    gameLoop(){

    }

    /**
     * Начать игрвой цикл
     */
    startGameLoop() {
        this.inteval = setInterval(() => this.gameLoop(), 100);
    }

    /**
     * Завершить игровой цикл
     */
    finishGameLoop(){
        clearInterval(this.inteval);
    }
}