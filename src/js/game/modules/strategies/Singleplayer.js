/**
 * Created by Denis on 02.04.2017.
 */
import IziToast from "izitoast";

export default class SinglePlayerStrategy {
    constructor(manager) {
        this.manager = manager;

        /*{action: hit||block, method: head||leg||arm, target: head||leg||arm}*/
        this.mySteps = new Array(5);
        this.opponentsSteps = new Array(5);
    }

    /**
     * Игровой цикл
     */
    gameLoop() {
        /*console.log(`health=${this.me.health}`);
         this.me.health -= 1;*/
        if (this.me.health <= 0) {
            this.finishGameLoop();
            this.manager.finish({
                winner: this.opponent,
                loser: this.me
            });
        } else if (this.opponent.health <= 0) {
            this.finishGameLoop();
            this.manager.finish({
                winner: this.me,
                loser: this.opponent
            });
        }
    }

    /**
     * Начать игровой цикл
     */
    startGameLoop() {
        this.inteval = setInterval(() => this.gameLoop(), 100);

        this.initDoStepListener();
        this.initActionListener();
    }

    /**
     * Инициализировать слушателей на кнопки "выбор действия"
     */
    initActionListener() {
        this.manager.scene.gameControls.initActionListener((index, actionObj) => {
            if (index < 5 && index >= 0 && actionObj !== null && typeof actionObj !== 'undefined') {

                this.mySteps[index] = actionObj/*Object.assign({}, actionObj)*/;

                this.manager.scene.gameControls.actionButtons[index].classList.remove('game-controls__action-button_empty');
                this.manager.scene.gameControls.actionButtons[index].classList.add('game-controls__action-button_fill');

                let btnText = '';
                if (actionObj.action === 'block') {
                    btnText = `block ${actionObj.method}`;
                } else if (actionObj.action === 'hit') {
                    btnText = `hit by ${actionObj.method} to ${actionObj.target}`;
                }
                this.manager.scene.gameControls.actionButtons[index].innerText = btnText;
            }
        });
    }

    /**
     * Инициализация слушателей на кнопку "сделать шаг"
     */
    initDoStepListener() {
        this.manager.scene.gameControls.initDoStepListener(() => {
            if (this.checkMyActionsArray()) {
                this.gameLogic().then(() => {
                    this.clearMyActionsArray();
                });
            } else {
                IziToast.error({
                    title: 'Fill action buttons',
                    position: 'topRight'
                });
            }
        });
    }

    /**
     * Игровая логика
     * @return {Promise}
     */
    gameLogic() {
        return new Promise((resolve) => {
            //let myActions = this.createStepForOpponent();
            let myActions = this.mySteps;
            let opponentActions = this.createStepForOpponent();

            console.log(myActions);
            console.log(opponentActions);

            for (let i = 0; i < 5; i++) {
                this.stepAnalyser(myActions, opponentActions, i);
            }

            resolve();
        });
    }

    stepAnalyser(myActions, opponentActions, stepIndex) {
        console.error(`action is № ${stepIndex+1}! my health=${this.me.health}! opponent health=${this.opponent.health}`);
        let myAction = myActions[stepIndex];
        let opponentAction = opponentActions[stepIndex];

        if (myAction.action === opponentAction.action) {
            switch (myAction.action) {
                case 'hit': {
                    //TODO heat by turns
                    this.logIt(`I hit by ${myAction.method} to ${myAction.target}`, stepIndex);
                    this.opponent.health -= 10;
                    this._updateOpponentHealth(-10);

                    this.logIt(`Opponent hit by ${opponentAction.method} to ${opponentAction.target}`, stepIndex);
                    this.me.health -= 10;
                    this._updateMyHealth(-10);
                    break;
                }
                case 'block': {
                    //TODO do block
                    this.logIt(`Both made a block`, stepIndex);
                    break;
                }
            }
        } else if (myAction.action === 'hit' && opponentAction.action === 'block') {
            if (myAction.target === opponentAction.method) {
                this.logIt(`I hit by ${myAction.method} to ${myAction.target} but opponent blocked it`, stepIndex);
            } else {
                this.logIt(`I hit by ${myAction.method} to ${myAction.target} and opponent didn't block`, stepIndex);
                this.opponent.health -= 10;
                this._updateOpponentHealth(-10);
            }
        } else if (myAction.action === 'block' && opponentAction.action === 'hit') {
            if (myAction.target === opponentAction.method) {
                this.logIt(`I'm blocked by ${myAction.method} from ${opponentAction.target}`, stepIndex);
            } else {
                this.logIt(`I missed hit by ${opponentAction.method} to ${opponentAction.target}`, stepIndex);
                this.me.health -= 10;
                this._updateMyHealth(-10);
            }
        }
    }

    logIt(text, stepIndex){
        console.log(text);
        IziToast.info({
            title: `${stepIndex+1} Action`,
            message: text,
            position: 'bottomRight',
            timeout: 10000,
            icon: ''
        })
    }

    _updateOpponentHealth(div) {
        this.manager.scene.opponentInfo.updateHealth(div);
    }

    _updateMyHealth(div) {
        this.manager.scene.myInfo.updateHealth(div);
    }

    /**
     * Проверить на полную заполненость массива действия
     * @return {boolean} true - все заполнено
     */
    checkMyActionsArray() {
        for (let i = 0; i < this.mySteps.length; i++) {
            if (this.mySteps[i] === null || typeof this.mySteps[i] === 'undefined') {
                return false;
            }
        }
        return true;
    }

    /**
     * Отчисить массив действия
     */
    clearMyActionsArray() {
        for (let i = 0; i < this.mySteps.length; i++) {
            this.mySteps[i] = null;
            this.manager.scene.gameControls.actionButtons[i].classList.remove('game-controls__action-button_fill');
            this.manager.scene.gameControls.actionButtons[i].classList.add('game-controls__action-button_empty');
            this.manager.scene.gameControls.actionButtons[i].innerText = 'add action';
        }
    }

    /**
     * Завершить игровой цикл, отчитска слушателей
     */
    finishGameLoop() {
        clearInterval(this.inteval);
        this.manager.scene.gameControls.deleteDoStepListener();
        this.manager.scene.gameControls.deleteActionListener();
    }

    /**
     * Установить игроков
     * @param me
     * @param opponent
     */
    setPlayers(me, opponent) {
        this.me = me;
        this.opponent = opponent;
        this.manager.scene.setPlayers(me, opponent);
    }


    createStepForOpponent() {
        let actionTypes = ['hit', 'block'];
        let methods = ['head', 'arm', 'leg'];
        let targets = ['head', 'body'];

        let actions = new Array(5);
        for (let i = 0; i < 5; i++) {
            let currAction = actionTypes[Math.floor(Math.random() * actionTypes.length)];
            let currMethod = currAction === 'hit' ?
                methods[Math.floor(Math.random() * methods.length)] : targets[Math.floor(Math.random() * targets.length)];
            actions[i] = {
                action: currAction,
                method: currMethod,
                target: targets[Math.floor(Math.random() * targets.length)]
            }
        }
        return actions;
    }
}