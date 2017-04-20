/**
 * Created by Denis on 02.04.2017.
 */
import GameScene from "./GameScene";
import SinglePlayerStrategy from "./strategies/Singleplayer";
import MultiPlayerStrategy from "./strategies/Multiplayer";
export default class GameManager {
    constructor(router, storage, view, strategy) {
        this._subscribed = [];

        this.router = router;
        this.storage = storage;
        this.node = view.node;
        this.view = view;

        this.scene = new GameScene(view.node, this.storage, this);
        this.strategy =
            strategy === this.storage.gameStates.SINGLEPLAYER_STRATEGY
                ? new SinglePlayerStrategy(this) : new MultiPlayerStrategy(this);
    }

    /**
     * Начать игровой процесс
     */
    start() {
        //TODO start strategy
        this.scene.setState(this.storage.gameStates.STATEWAIT);

        if (this.checkUser()) {
            setTimeout(() => {
                this.opponent = this._getOpponent();
                //this.opponent.health = 100; // ADD START HEALTH
                this.strategy.setPlayers(
                    //TODO fix this
                    //{login: /*this.storage.user.login*/'debug', health: 100, rating: 1029},
                    this.storage.user,
                    this.opponent);
                this.scene.setState(this.storage.gameStates.STATEGAME);
                this.strategy.startGameLoop();
            }, 1000);
        } else {
            this.router.go(this.storage.urls.LOGIN, true);
        }
    }

    /**
     * Завершить игровой процесс
     */
    finish(myResult, opponentResult) {
        //console.warn(`winner=${resultObj.winner.login} loser=${resultObj.loser.login}`);

        this.scene.setResultData(myResult, opponentResult);
        this.scene.setState(this.storage.gameStates.STATERESULT);
    }

    /**
     * Проверить user-а на существования
     * @return {boolean}
     */
    checkUser() {
        //TODO delete this
        return true;
        try {
            return this.storage.user.login !== null;
        } catch (e) {
            return false;
        }
    }

    /**
     * Получить противника
     * @return {*}
     * @private
     */
    _getOpponent() {
        if (this.strategy.constructor.name === SinglePlayerStrategy.name) {
            return {login: 'dc.DRE', rating: 99999999};
        } else {
            //TODO search for opponent in global
            return {login: 'MULTIPLAYER', rating: 99999999};
        }
    }
}