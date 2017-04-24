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
            this.ws = new WebSocket('wss://sf-server.herokuapp.com/api/user/game');
            this.ws.onopen = () => {
                console.log("Соединение установлено.");
            };
            this.initWebSocket();
        }

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
            if (this.strategy.constructor.name === SinglePlayerStrategy.name) {
                this.strategy.setPlayers(this.storage.user,  {login: 'SUPER BOT', rating: 99999999});
                this.scene.setState(this.storage.gameStates.STATEGAME);
                this.strategy.startGameLoop();
            }
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

    initWebSocket(){
        this.ws.onmessage = (event) => {
            console.log("Получены данные " + event.data);

            let data = (JSON.parse(event.data));
            if('message' in data){

            }
        };
    }

    /**
     * Получить противника
     * @return {*}
     * @private
     */
   /* _getOpponent() {
        if (this.strategy.constructor.name === SinglePlayerStrategy.name) {
            return new Promise((resolve) => {
                resolve({login: 'SUPER BOT', rating: 99999999});
            });
        } else {
            return new Promise((resolve) => {
                this.ws.onmessage = (event) => {
                    console.log("Получены данные " + event.data);

                    let data = (JSON.parse(event.data));
                    if(message in data){

                    } else if()
                    resolve(event.data);
                };
            });
        }
    }*/
}