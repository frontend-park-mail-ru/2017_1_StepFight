/**
 * Created by Denis on 02.04.2017.
 */
import IziToast from "izitoast";

export default class SinglePlayerStrategy {
    constructor(manager) {
        this.manager = manager;

        /*{action: hit||block, than: head||leg||arm, where: head||leg||arm}*/
        this.mySteps = new Array(5);
        this.opponentsSteps = new Array(5);
    }

    /**
     * Игровой цикл
     */
    gameLoop() {
        /*console.log(`health=${this.me.health}`);
         this.me.health -= 1;*/
        if (this.me.health < 0) {
            this.finishGameLoop();
            this.manager.finish();
        } else if (this.opponent.health < 0) {
            this.finishGameLoop();
            this.manager.finish();
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

                let actionClone = {};
                actionClone.action = actionObj.action;
                actionClone.than = actionObj.than;
                actionClone.where = actionObj.where;
                
                this.mySteps[index] = actionClone/*Object.assign({}, actionObj)*/;


                this.manager.scene.gameControls.actionButtons[index].classList.remove('game-controls__action-button_empty');
                this.manager.scene.gameControls.actionButtons[index].classList.add('game-controls__action-button_fill');

                let btnText = '';
                if (actionObj.action === 'block') {
                    btnText = `block ${actionObj.than}`;
                } else if (actionObj.action === 'hit') {
                    btnText = `hit by ${actionObj.than} to ${actionObj.where}`;
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
                IziToast.success({
                    title: 'Yeah',
                    position: 'topRight'
                });
                this.clearMyActionsArray();
            } else {
                IziToast.error({
                    title: 'Fill action buttons',
                    position: 'topRight'
                });
            }
        });
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

}