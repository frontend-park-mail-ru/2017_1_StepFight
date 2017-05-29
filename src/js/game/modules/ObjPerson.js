/**
 * Created by Denis on 05.04.2017.
 */
export default class ObjPerson {
    constructor(scene, sceneContext) {
        this.scene = scene;
        this.sceneContext = sceneContext;
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

    }

    getBones() {

    }

    getBonesNames() {

    }


    _moveToPos(position) {

    }

    depnut() {

    }
}