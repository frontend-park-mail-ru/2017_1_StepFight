/**
 * Created by Denis on 02.04.2017.
 */
export default class SinglePlayerStrategy{
    constructor() {

    }

    gameLoop(){

    }

    startGameLoop() {
        this.inteval = setInterval(() => this.gameLoop(), 100);
    }


}