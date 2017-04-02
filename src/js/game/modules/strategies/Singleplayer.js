/**
 * Created by Denis on 02.04.2017.
 */
export default class SinglePlayerStrategy{
    constructor() {
        console.log('SinglePlayerStrategy.c');
    }

    gameLoop(){

    }

    startGameLoop() {
        this.inteval = setInterval(() => this.gameLoop(), 100);
    }
}