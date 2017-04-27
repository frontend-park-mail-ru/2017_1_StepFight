/**
 * Created by Denis on 02.04.2017.
 */
import GameScene from "./GameScene";
import SinglePlayerStrategy from "./strategies/Singleplayer";
import MultiPlayerStrategy from "./strategies/Multiplayer";
import StepObject from "../object/StepObject";
import GameTimer from "../../../elements/game-timer/GameTimer";
export default class GameManager {
    constructor(router, storage, view, strategyName) {
        this._gameId = null;

        this.router = router;
        this.storage = storage;
        this.node = view.node;
        this.view = view;

        this.scene = new GameScene(this.view.node, this.storage, this);
        //установить состояние ожидания
        this.scene.setState(this.storage.gameStates.STATEWAIT);

        this.strategy =
            strategyName === this.storage.gameStates.SINGLEPLAYER_STRATEGY
                ? new SinglePlayerStrategy(this) : new MultiPlayerStrategy(this);

        if (strategyName === this.storage.gameStates.MULTIPLAYER_STRATEGY) {
            this.ws = new WebSocket('wss://sf-server.herokuapp.com/api/user/game');
            this.ws.onopen = () => {
                console.log("Соединение установлено.");
                this.initWebSocketListeners();
            };
        } else {
            this.startGameProcess();
        }
    }

    /**
     * Начать игровой процесс
     */
    startGameProcess(mpOpponentLogin) {
        if (this.checkUser()) {
            if (this.strategy.constructor.name === SinglePlayerStrategy.name) {
                this.strategy.setPlayers(this.storage.user, {login: 'SUPER BOT', rating: 99999999});
                this.scene.setState(this.storage.gameStates.STATEGAME);
                this.strategy.startGameLoop();
            } else {
                this.strategy.setPlayers(this.storage.user, {login: mpOpponentLogin});
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
        try {
            return this.storage.user.login !== null;
        } catch (e) {
            return false;
        }
    }

    initWebSocketListeners() {
        this.ws.onmessage = (event) => {
            console.group("Получены данные");
            console.log(event.data);
            console.groupEnd();

            this.messageAnalyzer(JSON.parse(event.data));
        };

        this.ws.onerror = (error) => {
            console.group("Ошибка");
            console.error(error);
            console.groupEnd();
        };

        this.ws.onclose = (event) => {
            console.group("Соединение закрыто");
            console.error(event);
            console.groupEnd();
        };
    }

    messageAnalyzer(data) {
        if ('message' in data) {
            switch (data.message) {
                case 'Connect': {

                    break
                }
                case 'Waiting': {

                    break;
                }
            }
        } else if ('key' in data) {
            this._gameId = data.key;
            let opponentLogin = (data.first === this.storage.user.login) ? data.second : data.first;
            this.startGameProcess(opponentLogin);
            this.startMpTimer();
        } else if ('id' in data) {
            this.stepResultAnalyzer(data);
            this.startMpTimer();
        }
    }

    startMpTimer(){
        new GameTimer().start().then(()=>{
            let step = new StepObject();
            step.init('arm', 'body', 'body');
            this.strategy.myStep = step;
            this.strategy.sendStep();
        });
    }

    stepResultAnalyzer(data) {
        let myAction = new StepObject();
        let opponentAction = new StepObject();
        let myDamage = 0;
        let opponentDamage = 0;
        if (data.first.login === this.storage.user.login) {
            myAction.init(data.first.method, data.first.target, data.first.block);
            opponentAction.init(data.second.method, data.second.target, data.second.block);
            myDamage = data.first.takenDamage;
            opponentDamage = data.second.takenDamage;
        } else {
            myAction.init(data.second.method, data.second.target, data.second.block);
            opponentAction.init(data.first.method, data.first.target, data.first.block);
            myDamage = data.second.takenDamage;
            opponentDamage = data.first.takenDamage;
        }
        this.strategy.stepAnalyzer(myAction, opponentAction, myDamage, opponentDamage);
        this.scene.gameControls.setButtonStepStatus(true);
    }
}