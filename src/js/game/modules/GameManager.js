/**
 * Created by Denis on 02.04.2017.
 */
import GameScene from "./GameScene";
import SinglePlayerStrategy from "./strategies/Singleplayer";
import MultiPlayerStrategy from "./strategies/Multiplayer";
export default class GameManager {
    constructor(storage, view, strategy) {
        this._subscribed = [];

        this.storage = storage;
        this.strategy = strategy === this.storage.gameStates.SINGLEPLAYER_STRATEGY ? new SinglePlayerStrategy() : new MultiPlayerStrategy();
        this.node = view.node;
        this.view = view;

        this.scene = new GameScene(view.node, this.storage);

        this._start();
    }

    /**
     * Начать игровой процесс
     * @private
     */
    _start(){
        //TODO start strategy
        this.scene.setState(this.storage.gameStates.STATEWAIT);
        setTimeout(()=>{
            this.opponent = this._getOpponent();
            this.scene.setPlayers(this.storage.user, this.opponent);
            this.scene.setState(this.storage.gameStates.STATEGAME);
        }, 1000);
    }

    /**
     * Получить противника
     * @return {*}
     * @private
     */
    _getOpponent() {
        if (this.strategy.constructor.name === SinglePlayerStrategy.name) {
            return {login: 'dc.DRE'};
        } else {
            //TODO search for opponent in global
            return {login: 'MULTIPLAYER'};
        }
    }
}