/**
 * Created by Denis on 02.04.2017.
 */

import IziToast from "izitoast";

export default class MultiPlayerStrategy {
    constructor(manager) {
        this.manager = manager;

        this.myStep = null;
        this.opponentsStep = null;
    }

    /**
     * Игровой цикл
     */
    gameLoop() {
        if (this.me.health <= 0) {
            //TODO create rating analyser
            this.finishGameLoop();
            this.manager.finish({
                win: false,
                object: this.me
            }, {
                win: true,
                object: this.opponent
            });
        } else if (this.opponent.health <= 0) {
            this.finishGameLoop();
            this.manager.finish({
                win: true,
                object: this.me
            }, {
                win: false,
                object: this.opponent
            });
        }
    }

    /**
     * Начать игрвой цикл
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
        this.manager.scene.gameControls.initActionListener((actionObj) => {
            if (actionObj !== null && typeof actionObj !== 'undefined') {
                this.myStep = actionObj;
                this.manager.scene.gameControls.buttonAddAction.classList.remove('game-controls__action-button_empty');
                this.manager.scene.gameControls.buttonAddAction.classList.add('game-controls__action-button_fill');

                let btnText = `hit by ${actionObj.hit.method} to ${actionObj.hit.target} and block ${actionObj.block.method}`;
                this.manager.scene.gameControls.buttonAddAction.innerText = btnText;
            }
        });
    }

    /**
     * Инициализация слушателей на кнопку "сделать шаг"
     */
    initDoStepListener() {
        this.manager.scene.gameControls.initDoStepListener(() => {
            //this.opponent.health-=100;
            if (this.checkMyAction()) {
                this.gameLogic().then(() => {
                    this.clearMyActionsArray();
                });
            } else {
                IziToast.error({
                    title: 'Fill action buttons',
                    position: 'topCenter'
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
            let myActions = this.myStep;
            let send = {
                method: myActions.hit.method,
                target: myActions.hit.target,
                block: myActions.block.method,
                hp: this.me.health
            };
            this.manager.ws.send(JSON.stringify(send));

            let opponentActions = this.createStepForOpponent();

            console.log(myActions);
            console.log(opponentActions);

            this.stepAnalyser(myActions, opponentActions);

            resolve();
        });
    }

    stepAnalyser(myAction, opponentAction) {
        let myDamage = this.getDamage('my', myAction, opponentAction);
        let opponentDamage = this.getDamage('opponent', myAction, opponentAction);

        if (myDamage !== 0) {
            this.logIt(`I missed hit by ${opponentAction.hit.method} to ${opponentAction.hit.target}`);
        } else {
            this.logIt(`Everything okey with ME!`);
        }

        if (opponentDamage !== 0) {
            this.logIt(`Opponent missed hit by ${myAction.hit.method} to ${myAction.hit.target}`);
        } else {
            this.logIt(`Everything okey with OPPONENT!`);
        }

        this._updateMyHealth(-myDamage);
        this._updateOpponentHealth(-opponentDamage);
    }


    getDamage(who, myAction, opponentAction) {

    }

    logIt(text) {
        console.log(text);
        IziToast.info({
            title: text,
            position: 'bottomRight',
            timeout: 10000,
            icon: ''
        })
    }

    _updateOpponentHealth(div) {
        this.opponent.health += div;
        this.manager.scene.opponentInfo.updateHealth(div);
    }

    _updateMyHealth(div) {
        this.me.health += div;
        this.manager.scene.myInfo.updateHealth(div);
    }

    /**
     * Проверить на полную заполненость массива действия
     * @return {boolean} true - все заполнено
     */
    checkMyAction() {
        console.log(this.myStep);
        return !(this.myStep === null || typeof this.myStep === 'undefined'
        || this.myStep.hit.method === null || this.myStep.hit.target === null
        || this.myStep.block.method === null);
    }

    /**
     * Отчисить массив действия
     */
    clearMyActionsArray() {
        this.myStep = null;
        this.manager.scene.gameControls.buttonAddAction.classList.remove('game-controls__action-button_fill');
        this.manager.scene.gameControls.buttonAddAction.classList.add('game-controls__action-button_empty');
        this.manager.scene.gameControls.buttonAddAction.innerText = 'add action';
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
        this.me.health = 100;
        this.opponent = opponent;
        this.opponent.health = 100;
        this.manager.scene.setPlayers(me, opponent);
    }
}