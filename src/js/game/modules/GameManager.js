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

        if (strategy === this.storage.gameStates.MULTIPLAYER_STRATEGY) {
            this.ws = new WebSocket('ws://sf-server.herokuapp.com/api/user/game');
        }

        this.ws.onopen = () => {
            console.log("Соединение установлено.");
        };

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
            this._getOpponent().then((opponent) => {
                this.strategy.setPlayers(
                    //TODO fix this
                    this.storage.user,
                    opponent);
                this.scene.setState(this.storage.gameStates.STATEGAME);
                this.strategy.startGameLoop();
            }).catch(err => {
                console.log(err);
            });
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
        //return true;
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
            return new Promise((resolve) => {
                resolve({login: 'SUPER BOT', rating: 99999999});
            });
        } else {
            return new Promise((resolve) => {
                this.ws.onmessage = (event) => {
                    console.log("Получены данные " + event.data);
                    resolve(event.data);
                };
            });
        }
    }
}