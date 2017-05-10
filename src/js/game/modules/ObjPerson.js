/**
 * Created by Denis on 05.04.2017.
 */
import * as THREE from "three";
export default class ObjPerson {
    constructor(scene, sceneContext) {
        this.scene = scene;
        this.sceneContext = sceneContext;
        this.material = new THREE.MeshLambertMaterial(
            {color: 0x7777ff /*shading: THREE.FlatShading,*/, skinning: true});

        this.bonesNames = {
            main: 0,
            bodyBottom: 1,
            bodyTop: 2,
            head: 3,
            collaboneLeft: 4,
            armLeftTop: 5,
            armLeftMiddle: 6,
            armLeftBottom: 7,
            collaboneRight: 8,
            armRightTop: 9,
            armRightMiddle: 10,
            armRightBottom: 11,
            legLeftTop: 12,
            legLeftMiddle: 13,
            legLeftBottom: 14,
            legRightTop: 15,
            legRightMiddle: 16,
            legRightBottom: 17,
        };

        this.personConst = {
            startPosition: {
                x: 10,
                y: 0,
                z: 0
            },
            startScale: {
                x: 2,
                y: 2,
                z: 2
            },
            startRotation: {
                x: Math.PI,
                y: Math.PI,
                z: 0
            }
        }
    }

    /**
     * Отрисовка персонажа
     * @param partOf - с какой части поля
     */
    render(partOf) {
        this.partOf = partOf;
        this._renderBodyOnStart();
    }


    /**
     * Отрисовка персонажа на начальных позициях
     * @private
     */
    _renderBodyOnStart() {
        let loader = new THREE.JSONLoader();
        loader.load('/src/three-models/player.json', (model => {
            const color = this.partOf === 'left' ? 0x00FF51 : 0xFF0037;
            let mat = new THREE.MeshLambertMaterial({color: color, shading: THREE.FlatShading, skinning: true});
            this.person = new THREE.SkinnedMesh(model, mat);

            const pos = this.partOf === 'left' ? -1 : 1;
            this.person.position.set(
                this.personConst.startPosition.x * pos,
                this.personConst.startPosition.y,
                this.personConst.startPosition.z
            );
            this.person.scale.set(
                this.personConst.startScale.x,
                this.personConst.startScale.y,
                this.personConst.startScale.z
            );
            this.person.rotation.set(
                this.personConst.startRotation.x,
                this.partOf === 'left' ? 0 : this.personConst.startRotation.y,
                this.personConst.startRotation.z
            );


            this.scene.add(this.person);

            console.log(this.person);
        }));
    }

    getBones() {
        return this.person.skeleton.bones;
    }

    getBonesNames() {
        return this.bonesNames;
    }


    _moveToPos(position) {
        let bones = this.getBones();
        let arm = bones[this.bonesNames.armRightBottom];

        let render = () => {
            window.requestAnimationFrame(render);
            step = 0.01;
        };
        render();
    }

    depnut() {

    }
}