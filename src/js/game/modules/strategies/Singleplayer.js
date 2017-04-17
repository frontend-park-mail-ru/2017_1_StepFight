/**
 * Created by Denis on 02.04.2017.
 */
import IziToast from "izitoast";

export default class SinglePlayerStrategy {
    constructor(scene, manager) {
        this.scene = scene;
        this.manager = manager;

        /*{action: hit||block, than: head||leg||arm, where: head||leg||arm}*/
        this.mySteps = new Array(5);
        this.opponentsSteps = new Array(5);
    }

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

    startGameLoop() {
        this.inteval = setInterval(() => this.gameLoop(), 100);

        this.initDoStepListener();
        this.initActionListener();
    }

    initActionListener() {
        this.scene.gameControls.initActionListener((index, actionObj) => {
            if (index < 5 && index >= 0 && actionObj !== null) {
                this.mySteps[index] = actionObj;
                this.scene.gameControls.actionButtons[index].classList.remove('game-controls__action-button_empty');
                this.scene.gameControls.actionButtons[index].classList.add('game-controls__action-button_fill');

                let btnText = '';
                if (actionObj.action === 'block') {
                    btnText = `block by ${actionObj.than}`;
                } else if (actionObj.action === 'hit') {
                    btnText = `hit by ${actionObj.than} to ${actionObj.where}`;
                }
                this.scene.gameControls.actionButtons[index].innerText = btnText;
            }
        });
    }

    initDoStepListener() {
        this.scene.gameControls.initDoStepListener(() => {
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

    checkMyActionsArray() {
        for (let i = 0; i < this.mySteps.length; i++) {
            if (this.mySteps[i] === null || typeof this.mySteps[i] === 'undefined') {
                return false;
            }
        }
        return true;
    }

    clearMyActionsArray() {
        for (let i = 0; i < this.mySteps.length; i++) {
            this.mySteps[i] = null;
            this.scene.gameControls.actionButtons[i].classList.remove('game-controls__action-button_fill');
            this.scene.gameControls.actionButtons[i].classList.add('game-controls__action-button_empty');
            this.scene.gameControls.actionButtons[i].innerText = 'add action';
        }
    }

    finishGameLoop() {
        clearInterval(this.inteval);
        this.scene.gameControls.deleteDoStepListener();
        this.scene.gameControls.deleteActionListener();
    }

    setPlayers(me, opponent) {
        this.me = me;
        this.opponent = opponent;
        this.scene.setPlayers(me, opponent);
    }

}