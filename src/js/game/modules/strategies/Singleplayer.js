/**
 * Created by Denis on 02.04.2017.
 */
import IziToast from "izitoast";
import StepObject from "../../object/StepObject";

export default class SinglePlayerStrategy {
    constructor(manager) {
        this.manager = manager;

        this.myStep = new StepObject();
        this.opponentStep = new StepObject();

        this.BASE_DAMAGE = 40;
    }

    /**
     * Игровой цикл
     */
    gameLoop() {
        //console.log(`${this.me.health} ${this.animationDone}`);
        if (this.me.health <= 0 && this.animationDone) {
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
        this.manager.view.gameControls.initActionListener((actionObj) => {
            if (actionObj !== null && typeof actionObj !== 'undefined') {
                this.myStep = actionObj;
                this.manager.view.gameControls.buttonAddAction.classList.remove('game-controls__action-button_empty');
                this.manager.view.gameControls.buttonAddAction.classList.add('game-controls__action-button_fill');

                this.manager.view.gameControls.buttonAddAction.innerText = `hit by ${actionObj.hit.method} to ${actionObj.hit.target} and block ${actionObj.block.method}`;
            }
        });
    }

    /**
     * Инициализация слушателей на кнопку "сделать шаг"
     */
    initDoStepListener() {
        this.manager.view.gameControls.initDoStepListener(() => {
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
            let opponentActions = this.createStepForOpponent();

            this.stepAnalyser(myActions, opponentActions);

            resolve();
        });
    }

    /**
     * Обработка шагов, вывод результатов шага
     * @param myAction
     * @param opponentAction
     */
    stepAnalyser(myAction, opponentAction) {
        let myDamage = this.getDamage('my', myAction, opponentAction);
        //myDamage = 1000;
        let opponentDamage = this.getDamage('opponent', myAction, opponentAction);
        this.animationDone = false;

        function analyseMyDamage() {
            return new Promise((resolve) => {
                let myPlay = {
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
                };
                if (myDamage !== 0) {
                    this.manager.scene.playerMe.play(myPlay).then(() => {
                    });
                    this.manager.scene.playerOpponent.play(opponentPlay).then(() => {
                        resolve();
                    });
                    this.logIt(true, 'red', `I missed hit by ${opponentAction.hit.method} to ${opponentAction.hit.target}`);
                } else {
                    myPlay.result = true;
                    opponentPlay.result = false;
                    this.manager.scene.playerMe.play(myPlay).then(() => {
                    });
                    this.manager.scene.playerOpponent.play(opponentPlay).then(() => {
                        resolve();
                    });
                    this.logIt(true, 'blue', `Everything okey with ME!`);
                }
                this._updateMyHealth(-myDamage);
            });
        }

        function analyseOpponentDamage() {
            let myPlay = {
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
            };
            if (opponentDamage !== 0) {
                this.manager.scene.playerMe.play(myPlay).then(() => {
                });
                this.manager.scene.playerOpponent.play(opponentPlay).then(() => {
                    this.animationDone = true;
                });
                this.logIt(false, 'red', `Opponent missed hit by ${myAction.hit.method} to ${myAction.hit.target}`);
            } else {
                myPlay.result = false;
                opponentPlay.result = true;
                this.manager.scene.playerMe.play(myPlay).then(() => {
                });
                this.manager.scene.playerOpponent.play(opponentPlay).then(() => {
                    this.animationDone = true;
                });
                this.logIt(false, 'blue', `Everything okey with OPPONENT!`);
            }
            this._updateOpponentHealth(-opponentDamage);
        }

        let fMyDamage = analyseMyDamage.bind(this);
        let fOpponentDamage = analyseOpponentDamage.bind(this);
        fMyDamage().then(() => {
            fOpponentDamage();
        });
    }

    /**
     * Получить вероятность метода
     * @param actionType - вид действия
     * @param method - метод удара||защиты
     * @return {number}
     */
    getProbability(actionType, method) {
        if (actionType === 'hit') {
            switch (method) {
                case 'head': {
                    return 0.65;
                }
                case 'arm': {
                    return 0.95;
                }
                case 'leg': {
                    return 0.8;
                }

            }
        } else if (actionType === 'block') {
            switch (method) {
                case 'head': {
                    return 0.6;
                }
                case 'body': {
                    return 0.8;
                }
            }
        }
    }

    /**
     * Выдать результат действия по вероятности (прошло ли действие)
     * @param p - вероятность
     * @return {boolean}
     */
    checkProbability(p) {
        let checkP = Math.floor(Math.random() * 100);
        console.log(`random=${checkP}`);
        console.log(`check p = ${p * 100 >= checkP}`);
        return p * 100 >= checkP;
    }

    /**
     *
     * @param who
     * @param myAction
     * @param opponentAction
     * @return {number}
     */
    getDamage(who, myAction, opponentAction) {
        let actionForAttacking = {};
        let actionForDefensing = {};
        if (who === 'my') {
            actionForDefensing = myAction;
            actionForAttacking = opponentAction;
        } else {
            actionForDefensing = opponentAction;
            actionForAttacking = myAction;
        }

        let hitP = 0;
        let blockP = 0;
        let checkP = 0;
        let damage = 0;
        if (actionForDefensing.block.method === actionForAttacking.hit.target) {
            hitP = this.getProbability('hit', actionForAttacking.hit.method);
            blockP = this.getProbability('block', actionForDefensing.block.method);
            checkP = this.checkProbability(hitP * blockP);
            damage = checkP ? (1 - hitP * blockP) * this.BASE_DAMAGE : 0;
        } else {
            hitP = this.getProbability('hit', actionForAttacking.hit.method);
            checkP = this.checkProbability(hitP);
            damage = checkP ? (1 - hitP / 2) * this.BASE_DAMAGE : 0;
        }
        console.warn(`hitP=${hitP} blockP=${blockP} checkP=${checkP} damage=${Math.round(damage)}`);
        return Math.round(damage);
    }

    /**
     * Вспомогательный метод, заменяет анимацию
     * @param isMe
     * @param color
     * @param text
     * @private
     */
    logIt(isMe, color, text) {
        let position = (isMe) ? 'topLeft' : 'topRight';

        switch (color){
            case ('red'):{
                IziToast.error({
                    title: text,
                    position: position,
                    timeout: 5000,
                    icon: ''
                });
                break;
            }
            case ('blue'):{
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
     * @param div - разница в здоровье
     * @private
     */
    _updateOpponentHealth(div) {
        this.opponent.health += div;
        this.manager.scene.opponentInfo.updateHealth(this.opponent.health);
    }

    /**
     * Обновить мое здовроье
     * @param div - разница в здоровье
     * @private
     */
    _updateMyHealth(div) {
        this.me.health += div;
        this.manager.scene.myInfo.updateHealth(this.me.health);
    }

    /**
     * Проверить на полную заполненость шага
     * @return {boolean} true - все заполнено
     */
    checkMyAction() {
        console.log(this.myStep);
        return !(this.myStep === null || typeof this.myStep === 'undefined'
        || this.myStep.hit.method === null || this.myStep.hit.target === null
        || this.myStep.block.method === null);
    }

    /**
     * Отчисить шаг
     */
    clearMyActionsArray() {
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


    /**
     * Генерация шага для бота
     * @return {StepObject}
     */
    createStepForOpponent() {
        let methods = ['head', 'arm', 'leg'];
        let targets = ['head', 'body'];


        let hitMethod = methods[Math.floor(Math.random() * methods.length)];
        let hitTarget = targets[Math.floor(Math.random() * targets.length)];
        let blockMethod = targets[Math.floor(Math.random() * targets.length)];

        let step = new StepObject();
        step.init(hitMethod, hitTarget, blockMethod);
        return step;
    }
}