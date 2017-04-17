/**
 * Created by Denis on 29.03.2017.
 */
// import * as THREE from "../../../../vendor/three";
import * as THREE from "three";
import * as OIMO from "oimo";

import ObjPerson from "./ObjPerson";
import GameControls from "../../../elements/game-controls/GameControls";
const OrbitControls = require('three-orbit-controls')(THREE);
// import * as OrbitControls from 'three-orbit-controls';

export default class GameScene {
    constructor(node, storage) {
        this.HDim = 34;
        this.WDim = 50;

        this.node = node;
        this.storage = storage;

        this._setSize();
        this._renderContainer();
    }

    _setSize() {
        const height = window.innerHeight;
        this.fieldSize = (height / this.HDim) | 0;
        this.WIDTH = window.innerWidth;
        this.HEGHT = this.fieldSize / 3 * 2 * this.HDim;
    }

    _onWindowResize() {
        let height = window.innerHeight;

        this.fieldSize = (height / this.HDim) | 0;
        this.WIDTH = window.innerWidth;

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
        /* init figures arr*/
        this.worldBodies = [];
        this.worldMeshes = [];

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

        this.world = new OIMO.World(1 / 60, 2, 8);

        this._addCamera();
        this._animate();
        this._initListeners();
    }

    _addStylesToContainer(){
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
        this.clear();

        /* Lights */
        let spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(0, 20, 30);
        this.scene.add(spotLight);

        /* figure where field in*/
        let octahedronGeometry = new THREE.OctahedronGeometry(4, 0);
        let octahedronMaterial = new THREE.MeshLambertMaterial(
            {color: 0xff0000});
        let octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
        octahedron.position.set(0, 0, 0);
        this.scene.add(octahedron);

        let render = () => {
            window.requestAnimationFrame(render);
            octahedron.rotation.y += 0.02;
            //this.refreshScene();
        };
        render();
    }

    /**
     * Отрисовка игрового режима
     * @private
     */
    _renderGameState() {
        this.clear();
        this._animCamera();
        this._renderControlArea();

        this._renderField();
        this._renderPlayers();
        this.refreshScene();

        // this.mePerson.depnut();

         this._renderNames();
         this._renderHealthBars();
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
    }

    _renderPlayers() {
        this.mePerson = new ObjPerson(this.scene, this);
        this.mePerson.render('right');

        this.opponentPerson = new ObjPerson(this.scene, this);
        this.opponentPerson.render('left');
    }

    _addCamera() {
        this.camera = new THREE.PerspectiveCamera(45
            , this.WIDTH / this.HEGHT, 0.1, 1000);

        this.camera.position.set(0,25,80);
        this.camera.lookAt(this.scene.position);
    }

    _animate() {
        let render = () => {
            window.requestAnimationFrame(render);
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


    _animCamera(){
        this.camera.position.set(0,0,1000);
        let render = () => {
            if (this.camera.position.z > 60) {
                this.camera.position.z -= 10;
                this.camera.lookAt(this.scene.position);
                window.requestAnimationFrame(render);
            } else if(this.camera.position.y < 30){
                this.camera.position.y += 1;
                this.camera.lookAt(this.scene.position);
                window.requestAnimationFrame(render);
            }
        };
        render();
    }

    _renderControlArea() {
        this.gameControls = new GameControls(this.container);
        this.gameControls.render();
    }

    /**
     * Отрисовка послеигрового режима (результаты, итоги)
     * @private
     */
    _renderResultState() {
        this.clear();
    }

    _renderNames(){

    }

    _renderHealthBars(){

    }

    /**
     * Отчистка основного контейнера
     */
    clear() {
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
}