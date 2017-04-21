/**
 * Created by Denis on 17.03.2017.
 */
import './view.css';

export default class BaseView {

    constructor(node) {
        this.node = node;
    }

    /**
     * Удалить view
     */
    destroyView(){
        while (this.node.firstChild) {
            this.node.removeChild(this.node.firstChild);
        }
    }
}