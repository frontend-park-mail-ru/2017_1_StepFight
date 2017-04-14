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
            const color = this.partOf === 'left' ? 0xFF0037 : 0x00FF51;
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


            this.person.skeleton.bones[17].position.y += -2;
            this.person.skeleton.bones[15].rotation.x += Math.PI / 6;
            this.person.skeleton.bones[16].rotation.x += -Math.PI / 4;
           /* this.person.skeleton.bones[16].position.y += -1;
            this.person.skeleton.bones[15].position.y += -1;

            this.person.skeleton.bones[14].position.y += 0;
            this.person.skeleton.bones[13].position.y += 1.5;
            this.person.skeleton.bones[12].position.y += 1;

            this.person.skeleton.bones[12].rotation.z += Math.PI / 2;*/

            /*this.person.skeleton.bones[5].rotation.y += Math.PI / 2;
            this.person.skeleton.bones[5].rotation.z += Math.PI / 2;
            this.person.skeleton.bones[6].rotation.y += 3 * Math.PI / 2;
            this.person.skeleton.bones[7].rotation.y += Math.PI ;*/

            // this.person.skeleton.bones[5].position.y += 3 ;

            this.scene.add(this.person);

            console.log(this.person);
        }));
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
     * Position params:
     * @param x
     * @param y
     * @param z
     * @private
     */
    _addInWorld(elem, x, y, z) {
        let body = this.sceneContext.world.add({
            type: 'box',
            pos: [x, y, z],
            move: true,
            world: this.sceneContext.world,
        });
        this.sceneContext.worldBodies.push(body);
        this.sceneContext.worldMeshes.push(elem);
    }
}