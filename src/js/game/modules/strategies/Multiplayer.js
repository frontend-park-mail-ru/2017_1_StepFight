/**
 * Created by Denis on 02.04.2017.
 */

import IziToast from "izitoast";
import StepObject from "../../object/StepObject";

export default class MultiPlayerStrategy {
    constructor(manager) {
        this.manager = manager;
        this.myStep = new StepObject();
    }

    /**
     * Игровой цикл
     */
    gameLoop() {
        if (this.me.health <= 0 && this.animationDone) {
            //TODO create rating analyser
            this.finishGameLoop();
            this.manager.finish({
                win: false,
                object: this.me
            }, {
                win: true,
                object: this.opponent
            });
        } else if (this.opponent.health <= 0 && this.animationDone) {
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
        this.manager.view.gameControls.initActionListener((actionObj) => {
            if (actionObj !== null && typeof actionObj !== 'undefined') {
                this.myStep = actionObj;
                this.manager.view.gameControls.buttonAddAction.classList.remove('game-controls__action-button_empty');
                this.manager.view.gameControls.buttonAddAction.classList.add('game-controls__action-button_fill');

                let btnText = `hit by ${actionObj.hit.method} to ${actionObj.hit.target} and block ${actionObj.block.method}`;
                this.manager.view.gameControls.buttonAddAction.innerText = btnText;
            }
        });
    }

    /**
     * Инициализация слушателей на кнопку "сделать шаг"
     */
    initDoStepListener() {
        this.manager.view.gameControls.initDoStepListener(() => {
            if (this.checkMyStep()) {
                this.sendStep();
            } else {
                IziToast.error({
                    title: 'Fill action buttons',
                    position: 'topCenter'
                });
            }
        });
    }

    /**
     * Отправить сделанный шаг
     */
    sendStep() {
        let myActions = this.myStep;
        let send = {
            method: myActions.hit.method,
            target: myActions.hit.target,
            block: myActions.block.method,
            hp: this.me.health,
            id: this.manager._gameId,
            type: 'step'
        };
        try {
            console.group("Отправленные данные:");
            console.warn(JSON.stringify(send));
            console.groupEnd();
            this.manager.ws.send(JSON.stringify(send));
            this.manager.view.gameControls.setButtonStepStatus(false);
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Обработка шагов, вывод результатов шага
     * @param myAction
     * @param opponentAction
     * @param myDamage
     * @param opponentDamage
     * @param myHp
     * @param opponentHp
     */
    stepAnalyze(myAction, opponentAction, myDamage, opponentDamage, myHp, opponentHp) {
        this.clearMyActionStep();
        this.animationDone = false;

        function analyseMyDamage(myPlay = {
            action: 'block',
            target: myAction.block.method,
            method: opponentAction.hit.method,
            result: false
        }, opponentPlay = {
            action: 'hit',
            target: opponentAction.hit.target,
            method: opponentAction.hit.method,
            result: true
        }) {
            return new Promise((resolve) => {
                /*let myPlay = {
                 action: 'block',
                 target: myAction.block.method,
                 method: opponentAction.hit.method,
                 result: false
                 };
                let opponentPlay = {
                 action: 'hit',
                 target: opponentAction.hit.target,
                 method: opponentAction.hit.method,
                 result: true
                 };*/
                if (myDamage !== 0) {
                    this.manager.scene.playerMe.play(myPlay).then(() => {
                    });
                    this.manager.scene.playerOpponent.play(opponentPlay).then(() => {
                        resolve();
                    });
                    this._logStep(true, 'red', `I missed hit by ${opponentAction.hit.method} to ${opponentAction.hit.target}`);
                } else {
                    myPlay.result = true;
                    opponentPlay.result = false;
                    this.manager.scene.playerMe.play(myPlay).then(() => {
                    });
                    this.manager.scene.playerOpponent.play(opponentPlay).then(() => {
                        resolve();
                    });
                    this._logStep(true, 'blue', `Everything okey with ME!`);
                }
                this._updateMyHealth(myHp);
            });
        }

        function analyseOpponentDamage(myPlay = {
            action: 'hit',
            target: myAction.hit.target,
            method: myAction.hit.method,
            result: true
        },opponentPlay = {
            action: 'block',
            target: opponentAction.block.method,
            method: myAction.hit.method,
            result: false
        }) {
            /*let myPlay = {
             action: 'hit',
             target: myAction.hit.target,
             method: myAction.hit.method,
             result: true
             };
             let opponentPlay = {
             action: 'block',
             target: opponentAction.block.method,
             method: myAction.hit.method,
             result: false
             };*/
            if (opponentDamage !== 0) {
                this.manager.scene.playerMe.play(myPlay).then(() => {
                });
                this.manager.scene.playerOpponent.play(opponentPlay).then(() => {
                });
                this._logStep(false, 'red', `Opponent missed hit by ${myAction.hit.method} to ${myAction.hit.target}`);
                this.animationDone = true;
            } else {
                myPlay.result = false;
                opponentPlay.result = true;
                this.manager.scene.playerMe.play(myPlay).then(() => {
                });
                this.manager.scene.playerOpponent.play(opponentPlay).then(() => {
                });
                this._logStep(false, 'blue', `Everything okey with OPPONENT!`);
                this.animationDone = true;
            }
            this._updateOpponentHealth(opponentHp);
        }

        let fMyDamage = analyseMyDamage.bind(this);
        let fOpponentDamage = analyseOpponentDamage.bind(this);

       /* console.warn(`MY=${this.checkOnNullStep(myAction)}`);
        console.warn(`OPP=${this.checkOnNullStep(opponentAction)}`);*/

        let checkMy = this.checkOnNullStep(myAction);
        let checkOpp = this.checkOnNullStep(opponentAction);

        if (checkMy && !checkOpp){
            fMyDamage({
                action: 'block',
                target: opponentAction.hit.target,
                method: opponentAction.hit.method,
                result: false
            }, {
                action: 'hit',
                target: opponentAction.hit.target,
                method: opponentAction.hit.method,
                result: true
            });
        } else if(!checkMy && checkOpp){
            fOpponentDamage({
                action: 'hit',
                target: myAction.hit.target,
                method: myAction.hit.method,
                result: true
            }, {
                action: 'block',
                target: myAction.hit.target,
                method: myAction.hit.method,
                result: false
            });
        } else {
            fMyDamage().then(() => {
                fOpponentDamage();
            });
        }
    }

    checkOnNullStep(obj) {
        let result = false;
        Object.keys(obj.hit).forEach(key => {
            if (obj.hit[key] === 'null')
                result = true;
        });
        Object.keys(obj.block).forEach(key => {
            if (obj.hit[key] === 'null')
                result = true;
        });
        return result;
    }

    /**
     * Вспомогательный метод, заменяет анимацию
     * @param isMe
     * @param color
     * @param text
     * @private
     */
    _logStep(isMe, color, text) {
        let position = (isMe) ? 'topLeft' : 'topRight';

        switch (color) {
            case ('red'): {
                IziToast.error({
                    title: text,
                    position: position,
                    timeout: 5000,
                    icon: ''
                });
                break;
            }
            case ('blue'): {
                IziToast.success({
                    title: text,
                    position: position,
                    timeout: 5000,
                    icon: ''
                });
                break;
            }
        }
    }

    /**
     * Обновить здоровье противника
     * @param hp - новый уровень здоровья
     * @private
     */
    _updateOpponentHealth(hp) {
        this.opponent.health = hp;
        this.manager.scene.opponentInfo.updateHealth(hp);
    }

    /**
     * Обновить мое здоровье
     * @param hp - новый уровень здоровья
     * @private
     */
    _updateMyHealth(hp) {
        this.me.health = hp;
        this.manager.scene.myInfo.updateHealth(hp);
    }

    /**
     * Проверить на полную заполненость шага
     * * @return {boolean} true - все заполнено
     */
    checkMyStep() {
        return !(this.myStep === null || typeof this.myStep === 'undefined'
        || this.myStep.hit.method === null || this.myStep.hit.target === null
        || this.myStep.block.method === null);
    }

    /**
     * Отчисить шаг
     */
    clearMyActionStep() {
        this.myStep = null;
        this.manager.view.gameControls.buttonAddAction.classList.remove('game-controls__action-button_fill');
        this.manager.view.gameControls.buttonAddAction.classList.add('game-controls__action-button_empty');
        this.manager.view.gameControls.buttonAddAction.innerText = 'add action';
    }

    /**
     * Завершить игровой цикл, отчитска слушателей
     */
    finishGameLoop() {
        clearInterval(this.inteval);
        this.manager.view.gameControls.deleteDoStepListener();
        this.manager.view.gameControls.deleteActionListener();
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