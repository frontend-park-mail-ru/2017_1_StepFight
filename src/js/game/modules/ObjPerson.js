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
                y: 7,
                z: 0
            },
            startScale: {
                x: 2,
                y: 2,
                z: 2
            },
            startRotation: {
                x: Math.PI / 2,
                y: 0,
                z: Math.PI / 2
            }
        }
    }

    render(partOf) {
        this.partOf = partOf;
        this._renderBodyOnStart();
    }


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
                this.personConst.startRotation.y,
                this.personConst.startRotation.z * pos
            );


            /*
             this.person.skeleton.bones[this.bonesNames.bodyTop].rotation.y += Math.PI/2;
             */

            this.scene.add(this.person);
            //this._addInWorld(this.person);

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
        let flag = true;
        let render = () => {
            window.requestAnimationFrame(render);
            step = /*Math.PI / 96*/ 0.01;

            /*while(flag){
             if(position.x < this.getBones()[this.bonesNames.armRightBottom].position.x){
             this.getBones()[this.bonesNames.armRightBottom].position -= step;
             } else {
             this.getBones()[this.bonesNames.armRightBottom].position += step;
             }
             }*/
        };
        render();
    }

    depnut() {
        /*let step = 0;
         let render = () => {
         window.requestAnimationFrame(render);
         step = Math.PI / 96;
         if (this.armRT) {
         this.armRT.skeleton.bones[7].rotation.x += step;
         this.armRT.skeleton.bones[7].rotation.y += step;
         }
         };
         render();*/
    }

    /**
     * Добавить в мир физики
     * @param elem
     * @private
     */
    _addInWorld(elem) {
        /*const pos = this.partOf === 'left' ? -1 : 1;

        let body = this.sceneContext.world.add({
            type: 'box',
            pos: [
                this.personConst.startPosition.x * pos,
                this.personConst.startPosition.y,
                this.personConst.startPosition.z
            ],
            rot: [
                this.personConst.startRotation.x,
                this.personConst.startRotation.y,
                this.personConst.startRotation.z * pos
            ],
            size: [
                15,15,15
            ],
            move: true,
            world: this.sceneContext.world,
            collidesWith: 0x00BFFF
        });

        this.person.position.copy(body.getPosition());
        this.person.quaternion.copy(body.getQuaternion());
        this.person.scale.set(
            this.personConst.startScale.x,
            this.personConst.startScale.y,
            this.personConst.startScale.z
        );
        this.person.rotation.set(
            this.personConst.startRotation.x,
            this.personConst.startRotation.y,
            this.personConst.startRotation.z * pos
        );

        this.sceneContext.worldBodies.push(body);
        this.sceneContext.worldMeshes.push(elem);*/
    }
}