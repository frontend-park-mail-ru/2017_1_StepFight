/**
 * Created by Denis on 02.04.2017.
 */
import GameScene from "./GameScene";
import SinglePlayerStrategy from "./strategies/Singleplayer";
import MultiPlayerStrategy from "./strategies/Multiplayer";
export default class GameManager {
    constructor(user, view, strategy) {
        this._subscribed = [];

        this.user = user;
        this.strategy = strategy === window.SINGLEPLAYER_STRATEGY ? new SinglePlayerStrategy() : new MultiPlayerStrategy();
        this.node = view.node;
        this.view = view;

        this.scene = new GameScene(view.node);

        this._start();
    }

    /**
     * Начать игровой процесс
     * @private
     */
    _start(){
        //TODO start strategy
        //this.scene.setState(window.STATEWAIT);
        setTimeout(()=>{
            this.opponent = this._getOpponent();
            this.scene.setNames(this.user.login, this.opponent.login);
            this.scene.setState(window.STATEGAME);
        }, 1);

       /* setTimeout(()=>{
            this.opponent = this._getOpponent();
            this.scene.setUserResult({
                result: 'win',
                divscore: 1
            }, this.user);
            this.scene.setState(window.STATERESULT);
        }, 2000);*/
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