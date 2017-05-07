/**
 * Created by Denis on 17.03.2017.
 */
import './view.scss';

export default class BaseView {

    constructor(node) {
        this.node = node;
    }

    /**
     * Удалить view
     */
    destroyView(){
        console.log(this.node);
        while (this.node.firstChild) {
            this.node.removeChild(this.node.firstChild);
        }
    }
}