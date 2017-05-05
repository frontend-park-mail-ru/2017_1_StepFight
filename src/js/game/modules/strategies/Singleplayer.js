/**
 * Created by Denis on 02.04.2017.
 */
import IziToast from "izitoast";
import StepObject from "../../object/StepObject";

export default class SinglePlayerStrategy {
    constructor(manager) {
        this.manager = manager;

        this.myStep = new StepObject();
        this.opponentsStep = new StepObject();

        this.BASE_DAMAGE = 40;
    }

    /**
     * Игровой цикл
     */
    gameLoop() {
        if (this.me.health <= 0) {
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
            damage = checkP ? (1 - hitP/2) * this.BASE_DAMAGE : 0;
        }
        console.warn(`hitP=${hitP} blockP=${blockP} checkP=${checkP} damage=${Math.round(damage)}`);
        return Math.round(damage);

        //TODO DONT DELETE COMMENTS!!! SHORT VERSION OF PREVIOUS CODE!!!!!!!
        //TODO DONT DELETE!!!
        //TODO DONT DELETE!!!
        //TODO DONT DELETE!!!

        /*if (actionForDefensing.block.method === actionForAttacking.hit.target) {
         return Math.round((this.checkProbability(this.getProbability('hit', actionForAttacking.hit.method)
         * this.getProbability('block', actionForDefensing.block.method))) ?
         (1 - (this.getProbability('hit', actionForAttacking.hit.method)
         * this.getProbability('block', actionForDefensing.block.method))) * this.BASE_DAMAGE : 0);
         } else {
         return Math.round((this.checkProbability(this.getProbability('hit', actionForAttacking.hit.method))) ?
         (1 - (this.getProbability('hit', actionForAttacking.hit.method))/2) * this.BASE_DAMAGE : 0);
         }*/

        //TODO DONT DELETE!!!
        //TODO DONT DELETE!!!
    }

    /**
     * Вспомогательный метод, заменяет анимацию
     * @param text
     * @private
     */
    logIt(text) {
        console.log(text);
        IziToast.info({
            title: text,
            position: 'bottomRight',
            timeout: 10000,
            icon: ''
        })
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