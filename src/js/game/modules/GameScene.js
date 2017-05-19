/**
 * Created by Denis on 29.03.2017.
 */
import * as THREE from "three";

import ObjPerson from "./ObjPerson";
import GameInfoToast from "../../../elements/game-info-toast/GameInfoToast";
import ProgressBarTable from "../../../elements/progress-bar-table/progressBarTable";
import GameResultTable from "../../../elements/game-result-table/GameResultTable";
import GameTimer from "../../../elements/game-timer/GameTimer";
const OrbitControls = require('three-orbit-controls')(THREE);

export default class GameScene {
    constructor(node, storage, manager) {
        this.HDim = 34;
        this.WDim = 50;

        this.node = node;
        this.manager = manager;
        this.storage = storage;

        this._setSize();
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

    /**
     * Метод срабатывает, когда окно меняет размер
     * @private
     */
    _onWindowResize() {
        let height = window.innerHeight;

        this.fieldSize = (height / this.HDim) | 0;
        this.WIDTH = window.innerWidth;

        this.HEGHT = this.fieldSize / 3 * 2 * this.HDim;

        if (!this.camera || !this.renderer) return;

        this.camera.aspect = this.WIDTH / this.HEGHT;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.WIDTH, this.HEGHT);
        console.log(`RESIZE WIDTH = ${this.WIDTH}`);
    }

    /**
     * Инициализация слушателей
     * @private
     */
    _initListeners() {
        window.addEventListener('resize', this._onWindowResize.bind(this), false);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    /**
     * Отрисовка основного контейнера
     */
    renderContainer() {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

        this.scene.fog = new THREE.FogExp2(0xffffff, 0.002);
        this.renderer.setClearColor(this.scene.fog.color);

        this.renderer.setSize(this.WIDTH, this.HEGHT);
        this._addStylesToContainer();

        this.container = document.createElement('div');
        this.container.setAttribute('class', 'game-view__container');

        this.container.appendChild(this.renderer.domElement);

        this.node.appendChild(this.container);

        this._addCamera();
        this._startRenderAnimate();
        this._initListeners();
    }

    /**
     * Удаление основного контейнера
     */
    removeContainer() {
        this.node.removeChild(this.container);
    }

    /**
     * Добавить стили для контейнера
     * @private
     */
    _addStylesToContainer() {
        this.renderer.domElement.setAttribute('class', 'game-view__game-area');
        this.renderer.domElement.setAttribute('id', 'game-area');
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

        this.renderContainer();

        this.clearScene();
        this._animCameraStart();
        /*this._renderControlArea();
        this._renderGameActionModal();*/
        this.manager.view.renderControlElements();

        this._renderField();
        this._renderPlayers();
        this.refreshScene();

        this._renderInfoBars();
    }

    /**
     * Нарисовать поле
     * @private
     */
    _renderField() {
        let axes = new THREE.AxisHelper(20);
        this.scene.add(axes);

        //дом
        let geometry = new THREE.IcosahedronGeometry(700, 1);
        let domeMaterial = new THREE.MeshPhongMaterial({
            color: 0x35FBE0,
            shading: THREE.FlatShading,
            side: THREE.BackSide
        });
        let dome = new THREE.Mesh(geometry, domeMaterial);
        this.scene.add(dome);

        //свет
        let light = new THREE.DirectionalLight(0x4198B5);
        light.position.set(1, 1, 1);
        this.scene.add(light);
        light = new THREE.DirectionalLight(0x4198B5);
        light.position.set(1, -1, 0);
        this.scene.add(light);
        light = new THREE.SpotLight(0x4198B5);
        light.position.set(-1, 1, 0);
        this.scene.add(light);

        let planeGeometry = new THREE.PlaneGeometry(1000, 1000, 40, 40);
        let planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, wireframe: true});
        let plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.set(0, -10, 0);
        this.scene.add(plane);
    }


    /**
     * Нарисовать игроков
     * @private
     */
    _renderPlayers() {
        this.mePerson = new ObjPerson(this.scene, this);
        this.mePerson.render('left');

        this.opponentPerson = new ObjPerson(this.scene, this);
        this.opponentPerson.render('right');
    }

    /**
     * Добавить камеру
     * @private
     */
    _addCamera() {
        this.camera = new THREE.PerspectiveCamera(45
            , this.WIDTH / this.HEGHT, 0.1, 1000);

        this.camera.position.set(0, 25, 80);
        this.camera.lookAt(this.scene.position);
    }

    /**
     * Запуск анимации, отрисовки
     * @private
     */
    _startRenderAnimate() {
        let render = () => {
            window.requestAnimationFrame(render);
            this.refreshScene();
        };
        render();
    }

    /**
     * Метод обновления, перерисовки сцены
     */
    refreshScene() {
        this.renderer.render(this.scene, this.camera);
    }


    /**
     * Метод анимации камеры на старте
     * @private
     */
    _animCameraStart() {
        this.camera.position.set(0, 0, 1000);
        let render = () => {
            if (this.camera.position.z > 60) {
                this.camera.position.z -= 10;
                this.camera.lookAt(this.scene.position);
                window.requestAnimationFrame(render);
            } else if (this.camera.position.y < 30) {
                this.camera.position.y += 1;
                this.camera.lookAt(this.scene.position);
                window.requestAnimationFrame(render);
            }
        };
        render();
    }

    /**
     * Отрисовка таймера
     */
    renderTimer(){
        this.timer = new GameTimer(this.container);
        this.timer.render();
    }

    /**
     * Отрисовка послеигрового режима (результаты, итоги)
     * @private
     */
    _renderResultState() {
        this.clearScene();
        this.clearView();

        this.gameResultTable = new GameResultTable(this.node);
        this.gameResultTable.render(this.resultData);
        this.gameResultTable.initListener(()=>{
           this.manager.router.go(this.storage.urls.PROFILE, false);
        });
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
        this.myInfo = new GameInfoToast(this.container, this.players.me.health, this.players.me.login, 'left');
        this.myInfo.render();
        this.opponentInfo = new GameInfoToast(this.container, this.players.opponent.health, this.players.opponent.login, 'right');
        this.opponentInfo.render();
    }

    /**
     * Отчистка сцены(canvas)
     */
    clearScene() {
        this.scene.children.splice(0, this.scene.children.length);
        this.refreshScene();
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