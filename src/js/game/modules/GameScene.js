/**
 * Created by Denis on 29.03.2017.
 */
// import * as THREE from "../../../../vendor/three";
import * as THREE from 'three';
import * as OIMO from 'oimo';

import ObjPerson from "./ObjPerson";
const OrbitControls = require('three-orbit-controls')(THREE);
// import * as OrbitControls from 'three-orbit-controls';

export default class GameScene {
    constructor(node, storage) {
        this.HDim = 34;
        this.WDim = 50;

        this.router = window.router;
        this.node = node;
        this.storage = storage;

        this._setSize();
        this._renderContainer();
    }

    _setSize() {
        const height = window.innerHeight;
        this.fieldSize = (height / this.HDim) | 0;
        this.WIDTH = this.fieldSize * this.WDim;
        this.HEGHT = this.fieldSize / 3 * 2 * this.HDim;
    }

    _onWindowResize() {
        let height = window.innerHeight;
        let width = window.innerWidth;

        this.fieldSize = (height / this.HDim) | 0;
        this.WIDTH = this.fieldSize * this.WDim;
        this.HEGHT = this.fieldSize / 3 * 2 * this.HDim;

        if (!this.camera || !this.renderer) return;

        this.camera.aspect = this.WIDTH / this.HEGHT;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.WIDTH, this.HEGHT);
    }

    _initListeners() {
        window.addEventListener('resize', this._onWindowResize.bind(this), false);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    _renderContainer() {
        this.worldBodies = [];
        this.worldMeshes = [];

        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.scene.fog = new THREE.FogExp2(0xffffff/*0x1E2630*/, 0.002);
        this.renderer.setClearColor(this.scene.fog.color);
        //this.renderer.setClearColor(0xEEEEEE, 1);
        this.renderer.setSize(this.WIDTH, this.HEGHT);
        this.renderer.domElement.setAttribute('class', 'game-view__game-area');
        this.renderer.domElement.setAttribute('id', 'game-area');

        this.node.appendChild(this.renderer.domElement);

        this.world = new OIMO.World(1 / 60, 2, 8);

        this._addCamera();
        this._animate();
        this._initListeners();
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
        this.clear();

        let spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(0, 20, 30);
        this.scene.add(spotLight);

        let octahedronGeometry = new THREE.OctahedronGeometry(4, 0);
        let octahedronMaterial = new THREE.MeshLambertMaterial(
            {color: 0xff0000});
        let octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
        octahedron.position.set(0, 0, 0);
        this.scene.add(octahedron);

        let render = () => {
            window.requestAnimationFrame(render);
            octahedron.rotation.y += 0.02;
            this.refreshScene();
        };
        render();
    }

    _renderField() {
        let axes = new THREE.AxisHelper(20);
        this.scene.add(axes);

        //dome
        let geometry = new THREE.IcosahedronGeometry(700, 1);
        let domeMaterial = new THREE.MeshPhongMaterial({
            color: 0x35FBE0,
            shading: THREE.FlatShading,
            side: THREE.BackSide
        });
        let dome = new THREE.Mesh(geometry, domeMaterial);
        this.scene.add(dome);

        //light
        let light = new THREE.DirectionalLight(0x4198B5);
        light.position.set(1, 1, 1);
        this.scene.add(light);
        light = new THREE.DirectionalLight(0x4198B5);
        light.position.set(1, -1, 0);
        this.scene.add(light);
        light = new THREE.SpotLight(0x4198B5);
        light.position.set(-1, 1, 0);
        this.scene.add(light);

        /*let object3d  = new THREE.DirectionalLight('white', 0.15);
         object3d.position.set(6,3,9);
         object3d.name = 'Back light';
         this.scene.add(object3d);

         let spotLight = new THREE.SpotLight(0xffffff);
         spotLight.position.set(0, 20, 30);
         this.scene.add(spotLight);*/

        let planeGeometry = new THREE.PlaneGeometry(1000, 1000, 40, 40);
        let planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, wireframe: true});
        let plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.set(0, -10, 0);
        this.scene.add(plane);

        this.world.add({
            size: [1000, 10, 1000],
            pos: [0, -10, 0],
            world: this.world,
            density: 1,
            collidesWith: 0xffffffff
        });

        this.world.gravity = new OIMO.Vec3(0, 0, 0);

        /*let gridXZ = new THREE.GridHelper(500, 10);
         this.scene.add(gridXZ);*/
    }

    _renderHelpFigure() {
        this.mePerson = new ObjPerson(this.scene, this);
        this.mePerson.render();
        /*let cubeGeometry = new THREE.CubeGeometry(4, 4, 4);
         let cubeMaterial = new THREE.MeshLambertMaterial(
         {
         color: 0xff0000,
         shading: THREE.FlatShading,
         });
         let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
         cube.position.x = -4;
         cube.position.y = -7;
         cube.position.z = 0;
         this.scene.add(cube);

         let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
         let sphereMaterial = new THREE.MeshLambertMaterial(
         {color: 0x7777ff});
         let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
         sphere.position.x = 20;
         sphere.position.y = -6;
         sphere.position.z = 2;
         this.scene.add(sphere);*/
    }

    _addCamera() {
        this.camera = new THREE.PerspectiveCamera(45
            , this.WIDTH / this.HEGHT, 0.1, 1000);

        this.camera.position.x = 0; // красная
        this.camera.position.y = 25; // зеленая
        this.camera.position.z = 80; // синяя
        this.camera.lookAt(this.scene.position);
    }

    _animate() {
        let render = () => {
            window.requestAnimationFrame(render);
            //this.controls.update();
            this.refreshScene();
        };
        render();
    }

    refreshScene() {
        if (this.world) {
            this.world.step();
            for (let i = 0, len = this.worldBodies.length; i < len; i++) {
                let b = this.worldBodies[i];
                let m = this.worldMeshes[i];

                if (!b.sleeping) {
                    m.position.copy(b.getPosition());
                    m.quaternion.copy(b.getQuaternion());
                }
            }
        }

        this.renderer.render(this.scene, this.camera);
    }


    /**
     * Отрисовка игрового режима
     * @private
     */
    _renderGameState() {
        this.clear();
        //this._resizer();
        this._renderTextArea();

        this._renderField();
        this._renderHelpFigure();
        this.refreshScene();
        this.mePerson.depnut();
        /*this._renderNames();
         //this._renderActionContainer();
         this._renderHealthBar();
         this._renderField();*/
    }

    _renderTextArea(){
        let container = document.createElement('div');
        container.setAttribute('id', 'command-div');
        container.setAttribute('class', 'game-view__controls');

        let commandBox= document.createElement('textarea');
        commandBox.setAttribute('id', 'commands');
        commandBox.setAttribute('class', 'game-view__controls__textarea');
        commandBox.setAttribute('placeholder', 'Your commands');

        let btnStep = document.createElement('div');
        btnStep.setAttribute('id', 'btn-next-step');
        btnStep.setAttribute('class', 'game-view__controls__button');
        let text = document.createElement('p');
        text.innerText = 'Create step';
        btnStep.appendChild(text);

        container.appendChild(commandBox);
        container.appendChild(btnStep);
        this.node.appendChild(container);
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
    _renderResultState() {
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