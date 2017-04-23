/**
 * Created by Denis on 02.04.2017.
 */
import IziToast from "izitoast";

export default class SinglePlayerStrategy {
    constructor(manager) {
        this.manager = manager;

        this.myStep = null;
        this.opponentsStep = null;

        this.BASE_DAMAGE = 40;
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

    checkProbability(p) {
        let checkP = Math.floor(Math.random() * 100);
        console.log(`check p = ${p * 100 >= checkP}`);
        return p * 100 >= checkP;
    }

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

        let hitP = -1.1;
        let blockP = -1.1;
        let checkP = -1.1;
        let damage = -1.1;
        if (actionForDefensing.block.method === actionForAttacking.hit.target) {
            hitP = this.getProbability('hit', actionForAttacking.hit.method);
            blockP = this.getProbability('block', actionForDefensing.block.method);
            checkP = this.checkProbability(hitP * blockP);
            damage = checkP ? (1 - hitP * blockP) * this.BASE_DAMAGE : 0;
        } else {
            hitP = this.getProbability('hit', actionForAttacking.hit.method);
            checkP = this.checkProbability(hitP);
            damage = checkP ? (1 - hitP) * this.BASE_DAMAGE : 0;
        }
        console.warn(`hitP=${hitP} blockP=${blockP} checkP=${checkP} damage=${Math.round(damage)}`);
        return Math.round(damage);

        //TODO DONT DELETE COMMENTS!!!
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
         (1 - (this.getProbability('hit', actionForAttacking.hit.method))) * this.BASE_DAMAGE : 0);
         }*/

        //TODO DONT DELETE!!!
        //TODO DONT DELETE!!!
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
        this.opponent.health -= 10;
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


    createStepForOpponent() {
        let methods = ['head', 'arm', 'leg'];
        let targets = ['head', 'body'];


        let hitMethod = methods[Math.floor(Math.random() * methods.length)];
        let hitTarget = targets[Math.floor(Math.random() * targets.length)];
        let blockMethod = targets[Math.floor(Math.random() * targets.length)];
        return {
            hit: {
                method: hitMethod,
                target: hitTarget
            },
            block: {
                method: blockMethod
            }
        };
    }
}