/**
 * Created by Denis on 29.03.2017.
 */
import * as PIXI from "pixi.js/lib/core/index";
import GameControllers from "./GameControllers";
export default class GameScene {
    constructor(node) {
        this.router = window.router;
        console.log('GameScene.c');
        this.node = node;
        this.HDim = 34;
        this.WDim = 50;
        this._renderContainer();
    }

    _renderContainer() {
        this._resizer();
        this.app = new PIXI.Application(
            this.fieldSize * this.WDim,
            this.fieldSize / 3 * 2 * this.HDim,
            {backgroundColor: 0x1099bb});
        this.node.appendChild(this.app.view);
        this.controllers = new GameControllers(this.app.view);
        this.controllers.init();
    }

    setState(state) {
        this.state = state;
        this._renderState();
    }

    _resizer() {
        const height = window.innerHeight;
        this.fieldSize = (height / this.HDim) | 0;

        /*this.canvas.dheight = this.fieldSize * HDim;
         this.canvas.dwidth = this.fieldSize * WDim;

         this.canvas.height = this.canvas.dheight;
         this.canvas.width = this.canvas.dwidth;*/
    }


    _renderState() {
        switch (this.state) {
            case window.STATEWAIT: {
                this._renderWait();
                break;
            }
            case window.STATEGAME: {
                this._renderGame();
                break;
            }
            case window.STATERESULT: {
                this._renderResult();
                break;
            }
        }
    }

    _renderWait() {
        this.clear();
        this._resizer();

        let progress = PIXI.Sprite.fromImage('/src/img/game/fistloader.png');
        progress.anchor.set(0.5);
        progress.x = this.app.renderer.width / 2;
        progress.y = this.app.renderer.height / 2;
        this.app.stage.addChild(progress);

        this.app.ticker.add(function (delta) {
            progress.rotation += 0.1 * delta;
        });
    }

    _renderGame() {
        this.clear();
        this._resizer();

        let meLogin = new PIXI.Text(this.players.me, {
            fontFamily: 'Snippet',
            fontSize: 15,
            fill: 'white',
            align: 'left'
        });
        meLogin.x = 10;
        meLogin.y = 10;

        let opponentLogin = new PIXI.Text(this.players.opponent, {
            fontFamily: 'Snippet',
            fontSize: 15,
            fill: 'white',
            align: 'right'
        });
        opponentLogin.x = this.app.renderer.width - opponentLogin.width - 10;
        opponentLogin.y = 10;

        this.app.stage.addChild(meLogin, opponentLogin);
    }

    _renderResult() {
        this.clear();
        this._resizer();
    }

    clear() {
        this.app.stage.children.splice(0, this.app.stage.children.length);
    }

    setNames(me, opponent) {
        this.players = {'me': me, 'opponent': opponent};
    }
}