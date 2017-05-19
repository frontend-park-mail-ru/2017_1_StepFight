/**
 * Created by Denis on 02.04.2017.
 */
import GameScene from "./GameScene";
import SinglePlayerStrategy from "./strategies/Singleplayer";
import MultiPlayerStrategy from "./strategies/Multiplayer";
import StepObject from "../object/StepObject";
export default class GameManager {
    constructor(router, storage, view, strategyName) {
        //для мультиплеера
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
    }

    startGame(){
        if (this.strategy.className === 'MultiPlayerStrategy') {
            this.ws = new WebSocket('wss://sf-server.herokuapp.com/api/user/game');
            this.ws.onopen = () => {
                console.log("Соединение установлено.");
                this.initWebSocketListeners();
            };
        } else {
            this.startSpGameProcess();
        }
    }

    /**
     * Начать игровой процесс SP
     */
    startSpGameProcess() {
        if (this.checkUser()) {
            if (this.strategy.constructor.name === SinglePlayerStrategy.name) {
                this.strategy.setPlayers(this.storage.user, {login: 'SUPER BOT', rating: 99999999});
                this.scene.setState(this.storage.gameStates.STATEGAME);
                this.strategy.startGameLoop();
            }
        } else {
            this.router.go(this.storage.urls.LOGIN, true);
        }
    }

    /**
     * Начать игровой процесс MP
     */
    startMpGameProcess(mpOpponentLogin) {
        if (this.checkUser()) {
            if (this.strategy.constructor.name === MultiPlayerStrategy.name) {
                this.strategy.setPlayers(this.storage.user, {login: mpOpponentLogin});
                this.scene.setState(this.storage.gameStates.STATEGAME);
                this.strategy.startGameLoop();
                this.scene.renderTimer();
            }
        } else {
            this.router.go(this.storage.urls.LOGIN, true);
        }
    }

    /**
     * Завершить игровой процесс
     */
    finish(myResult, opponentResult) {
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

    /**
     * Инициализация слушателей WebSocket-а
     */
    initWebSocketListeners() {
        this.ws.onmessage = (event) => {
            console.group("Получены данные");
            console.log(event.data);
            console.groupEnd();

            this.wsMessageAnalyze(JSON.parse(event.data));
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

    /**
     * Метод обработки входящих сообщений по ws
     * @param data
     */
    wsMessageAnalyze(data) {
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
            this.startMpGameProcess(opponentLogin);
            this.startMpTimer();
        } else if ('id' in data) {
            this.stepResultAnalyze(data);
            this.startMpTimer();
        }
    }

    /**
     * Запустить таймер
     */
    startMpTimer() {
        this.scene.timer.start().then(() => {
            let step = new StepObject();
            step.init('arm', 'body', 'body');
            this.strategy.myStep = step;
            this.strategy.sendStep();
        });
    }

    /**
     * Обработка шагов(достаем действия шагов из объекта)
     * @param data
     */
    stepResultAnalyze(data) {
        let myAction = new StepObject();
        let opponentAction = new StepObject();
        let myDamage = 0;
        let opponentDamage = 0;
        let myHealth = 0;
        let opponentHealth = 0;
        if (data.first.login === this.storage.user.login) {
            myAction.init(data.first.method, data.first.target, data.first.block);
            opponentAction.init(data.second.method, data.second.target, data.second.block);
            myDamage = data.first.takenDamage;
            opponentDamage = data.second.takenDamage;
            myHealth = data.first.hp;
            opponentHealth = data.second.hp;
        } else {
            myAction.init(data.second.method, data.second.target, data.second.block);
            opponentAction.init(data.first.method, data.first.target, data.first.block);
            myDamage = data.second.takenDamage;
            opponentDamage = data.first.takenDamage;
            myHealth = data.second.hp;
            opponentHealth = data.first.hp;
        }
        this.strategy.stepAnalyze(myAction, opponentAction, myDamage, opponentDamage, myHealth, opponentHealth);
        this.view.gameControls.setButtonStepStatus(true);
    }

    /**
     * Закрыть ws соединение
     */
    closeWebSocket() {
        if (typeof this.ws !== 'undefined')
            this.ws.close();
    }
}