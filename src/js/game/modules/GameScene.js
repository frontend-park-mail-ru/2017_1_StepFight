/**
 * Created by Denis on 29.03.2017.
 */
import GameInfoToast from "../../../elements/game-info-toast/GameInfoToast";
import ProgressBarTable from "../../../elements/progress-bar-table/progressBarTable";
import GameResultTable from "../../../elements/game-result-table/GameResultTable";
import GameTimer from "../../../elements/game-timer/GameTimer";

import "./game-scene.scss";
import ObjPerson from "./ObjPerson";
import MultiPlayerStrategy from "./strategies/Multiplayer";

export default class GameScene {
    constructor(node, storage, manager) {
        this.HDim = 34;
        this.WDim = 50;

        this.node = node;
        this.manager = manager;
        this.storage = storage;

        this.app = b4w.require("app");
        this.data = b4w.require("data");

        this._setSize();
    }

    destroy() {
        delete this.app;
        delete this.data;
    }

    /**
     * Установить все размеры экрана
     * @private
     */
    _setSize() {
        const height = window.innerHeight;
        this.fieldSize = (height / this.HDim) | 0;
        this.WIDTH = window.innerWidth;
        console.log(`WIDTH = ${this.WIDTH}`);
        this.HEGHT = this.fieldSize / 3 * 2 * this.HDim;
    }

    _onWindowResize() {
        let height = window.innerHeight;

        this.fieldSize = (height / this.HDim) | 0;
        this.WIDTH = window.innerWidth;

        this.HEGHT = this.fieldSize / 3 * 2 * this.HDim;

        this.container.style.height = `${this.HEGHT}px`;

        /* console.log(`RESIZE WIDTH = ${this.WIDTH}`);
         console.log(`RESIZE HEIGHT = ${this.HEGHT}`);*/
    }

    /**
     * Инициализация слушателей
     * @private
     */
    _initListeners() {
        window.addEventListener('resize', this._onWindowResize.bind(this), false);
    }

    /**
     * Установить текущее состояние
     * @param state - состояние
     */
    setState(state) {
        this.state = state;
        this._renderState();
    }

    /**
     * Отрисовка, относительно входного события
     * @private
     */
    _renderState() {
        switch (this.state) {
            case this.storage.gameStates.STATEWAIT: {
                this._renderWaitState();
                break;
            }
            case this.storage.gameStates.STATEGAME: {
                this._renderGameState();
                break;
            }
            case this.storage.gameStates.STATERESULT: {
                this._renderResultState();
                break;
            }
        }
    }

    _addStyleOnCanvas() {
        this.canvas = this.node.getElementsByTagName('canvas')[2];
    }

    /**
     * Отрисовка ждущего режима
     * @private
     */
    _renderWaitState() {
        this.progressBarTable = new ProgressBarTable(this.node);
        this.progressBarTable.render({
            conf: [
                {
                    text: 'Search for an opponent...'
                }
            ]
        });
    }

    /**
     * Отрисовка игрового режима
     * @private
     */
    _renderGameState() {
        this.progressBarTable.remove();
        this.progressBarTable.render({conf: [{text: 'Loading'}]});
        this._renderContainer();

        this.manager.view.renderControlElements();

        this._renderInfoBars();
        this._initListeners();
    }

    _renderContainer() {
        this.container = document.createElement('div');
        this.container.setAttribute('id', 'game-container');
        this.container.setAttribute('class', 'game-container');
        this.node.appendChild(this.container);

        this._onWindowResize();

        this._renderCanvas();
    }

    /**
     * Отрисовка canvas
     */
    _renderCanvas() {
        this.data.unload();
        this.data.activate_media();
        this.app.init({
            canvas_container_id: "game-container",
            autoresize: true,
            physics_enabled: true,
            callback: () => {
                this.data.load("/src/three-models/animation_all.json", () => {
                    this._initScene();
                });
            }
        });
    }

    _initScene() {
        this.progressBarTable.remove();

        let m_scenes = b4w.require("scenes");
        let m_anim = b4w.require("animation");

        this.playerMe = new ObjPerson(m_anim, m_scenes.get_object_by_name("Player_1"));
        this.playerOpponent = new ObjPerson(m_anim, m_scenes.get_object_by_name("Player_2"));

        if (this.manager.strategy instanceof MultiPlayerStrategy) {
            this.renderTimer();
            this.manager.sendMessageToServer({type: 'ready', id: this.manager._gameId});
        }

        this.manager.view.gameControls.show();
    }

    /**
     * Отрисовка таймера
     */
    renderTimer() {
        this.timer = new GameTimer(this.node);
        this.timer.render();
    }

    /**
     * Отрисовка послеигрового режима (результаты, итоги)
     * @private
     */
    _renderResultState() {
        this.clearView();

        this.gameResultTable = new GameResultTable(this.node, this.storage);
        this.gameResultTable.render(this.resultData);
        /*this.gameResultTable.initListener(()=>{
         this.manager.router.go(this.storage.urls.PROFILE, false);
         });*/
    }

    /**
     * Метод отчистки вьюшки
     */
    clearView() {
        while (this.node.children.length > 0) {
            this.node.removeChild(this.node.lastChild);
        }
    }

    /**
     * Отрисовка элементов здоровья
     * @private
     */
    _renderInfoBars() {
        this.myInfo = new GameInfoToast(this.node, this.players.me.health, this.players.me.login, 'left');
        this.myInfo.render();
        this.opponentInfo = new GameInfoToast(this.node, this.players.opponent.health, this.players.opponent.login, 'right');
        this.opponentInfo.render();
    }

    /**
     * Установка данных игроков
     * @param me
     * @param opponent
     */
    setPlayers(me, opponent) {
        this.players = {me: me, opponent: opponent};
    }

    /**
     * Установить данные по результатам боя
     * @param me
     * @param opponent
     */
    setResultData(me, opponent) {
        this.resultData = {
            me: me,
            opponent: opponent
        }
    }
}