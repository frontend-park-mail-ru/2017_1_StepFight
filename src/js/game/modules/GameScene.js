/**
 * Created by Denis on 29.03.2017.
 */
import * as PIXI from "pixi.js/lib/core/index";
import * as THREE from "../../../../vendor/three";
export default class GameScene {
    constructor(node) {
        this.HDim = 34;
        this.WDim = 50;

        this.router = window.router;
        this.node = node;

        this._setSize();
        this._renderContainer();
    }

    _setSize(){
        const height = window.innerHeight;
        this.fieldSize = (height / this.HDim) | 0;
        this.WIDTH = this.fieldSize * this.WDim;
        this.HEGHT = this.fieldSize / 3 * 2 * this.HDim
    }

    _renderContainer(){
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setClearColor(0xEEEEEE, 1);
        this.renderer.setSize( this.WIDTH, this.HEGHT);
        this.renderer.domElement.setAttribute('class', 'game-area');
        this.renderer.domElement.setAttribute('id', 'game-area');


        this.node.appendChild(this.renderer.domElement);
    }

    _renderField(){
        let axes = new THREE.AxisHelper( 20 );
        this.scene.add(axes);

        let planeGeometry = new THREE.PlaneGeometry(60,20,1,1);
        let planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
        let plane = new THREE.Mesh(planeGeometry,planeMaterial);
        plane.rotation.x=-0.5*Math.PI;
        plane.position.x = 0;
        plane.position.y = -10;
        plane.position.z = 0;
        this.scene.add(plane);
    }

    _renderHelpFigure(){
        let cubeGeometry = new THREE.CubeGeometry(4,4,4);
        let cubeMaterial = new THREE.MeshBasicMaterial(
            {color: 0xff0000, wireframe: true});
        let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.x = -4;
        cube.position.y = -7;
        cube.position.z = 0;
        this.scene.add(cube);

        let sphereGeometry = new THREE.SphereGeometry(4,20,20);
        let sphereMaterial = new THREE.MeshBasicMaterial(
            {color: 0x7777ff, wireframe: true});
        let sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
        sphere.position.x = 20;
        sphere.position.y = -6;
        sphere.position.z = 2;
        this.scene.add(sphere);
    }

    refreshScene(){
        let camera = new THREE.PerspectiveCamera(45
            , this.WIDTH / this.HEGHT , 0.1, 1000);

        camera.position.x = 0; // красная
        camera.position.y = 20; // зеленая
        camera.position.z = 35; // синяя
        camera.lookAt(this.scene.position);

        this.renderer.render(this.scene, camera);
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

    /**
     * Отрисовка ждущего режима
     * @private
     */
    _renderWait() {
        this.clear();

    }

    /**
     * Отрисовка игрового режима
     * @private
     */
    _renderGame() {
        this.clear();
        //this._resizer();

        this._renderField();
        this._renderHelpFigure();
        this.refreshScene();
        /*this._renderNames();
        //this._renderActionContainer();
        this._renderHealthBar();
        this._renderField();*/
    }

    /**
     * Отрисовка логинов игроков по углам
     * @private
     */
    /*_renderNames() {
        let meLogin = new PIXI.Text(this.players.me, {
            fontFamily: 'Orbitron',
            fontSize: 15,
            fill: 'black',
            align: 'left'
        });
        meLogin.x = 10;
        meLogin.y = 10;

        let opponentLogin = new PIXI.Text(this.players.opponent, {
            fontFamily: 'Orbitron',
            fontSize: 15,
            fill: 'black',
            align: 'right'
        });
        opponentLogin.x = this.app.renderer.width - opponentLogin.width - 10;
        opponentLogin.y = 10;

        this.app.stage.addChild(meLogin, opponentLogin);
    }*/

    /**
     * Отрисовка баланса здоровья
     * @private
     */
    /*_renderHealthBar() {
        //Create the health bar
        this.opponentHealthBar = new PIXI.Container();
        this.opponentHealthBar.position.set(this.app.renderer.width - 12, 40);
        this.app.stage.addChild(this.opponentHealthBar);

        this.myHealthBar = new PIXI.Container();
        this.myHealthBar.position.set(12, 40);
        this.app.stage.addChild(this.myHealthBar);

        //Create the front red rectangle
        let opponentOuterBar = new PIXI.Graphics();
        opponentOuterBar.beginFill(0x081b32);
        opponentOuterBar.drawRect(0, 0, -100, 8);
        opponentOuterBar.endFill();
        this.opponentHealthBar.addChild(opponentOuterBar);

        let myOuterBar = new PIXI.Graphics();
        myOuterBar.beginFill(0x081b32);
        myOuterBar.drawRect(0, 0, 100, 8);
        myOuterBar.endFill();
        this.myHealthBar.addChild(myOuterBar);

        this.opponentHealthBar.outer = opponentOuterBar;
        this.myHealthBar.outer = myOuterBar;
    }*/

    /**
     * Установить текущее здоровье
     * @param health
     */
    /*setMyHealth(health) {
        this.opponentHealthBar.outer.width = health;
    }*/

    /**
     * Установить текущее здоровье противника
     * @param health
     */
    /*setOpponentHealth(health) {
        this.myHealthBar.outer.width = health;
    }*/



    /**
     * Отрисовка послеигрового режима (результаты, итоги)
     * @private
     */
    _renderResult() {
        this.clear();

    }

    /**
     * Отчистка основного контейнера
     */
    clear() {
        this.scene.children.splice(0, this.scene.children.length);
        this.refreshScene();
    }

    /**
     * Установка имен игроков
     * @param me
     * @param opponent
     */
    setNames(me, opponent) {
        this.players = {me: me, opponent: opponent};
    }

    setUserResult(objResult, user) {
        this.objResult = objResult;
    }


}