/**
 * Created by Denis on 02.04.2017.
 */
export default class SinglePlayerStrategy {
    constructor(scene, manager) {
        this.scene = scene;
        this.manager = manager;
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

        this.scene.gameControls.initListener(()=>{
            console.log("CLICK BITCH~");
        });
    }

    finishGameLoop() {
        clearInterval(this.inteval);
    }

    setPlayers(me, opponent) {
        this.me = me;
        this.opponent = opponent;
        this.scene.setPlayers(me, opponent);
    }

}