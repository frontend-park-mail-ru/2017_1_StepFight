/**
 * Created by Denis on 02.04.2017.
 */
export default class MultiPlayerStrategy{
    constructor() {
        console.log('MultiPlayerStrategy.c');
    }

    gameLoop(){

    }

    startGameLoop() {
        this.inteval = setInterval(() => this.gameLoop(), 100);
    }
}