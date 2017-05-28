/**
 * Created by Denis on 17.03.2017.
 */
import "./view.scss";

export default class BaseView {

    constructor(node) {
        this.node = node;
    }

    renderView(){
        if (document.getElementById('start-loader')) {
            document.getElementById('start-loader').remove();
        }
        this.node.classList.remove('fadeOut');
        this.node.classList.add('fadeIn');
    }

    /**
     * Удалить view
     */
    destroyView() {
        this.node.classList.remove('fadeIn');
        this.node.classList.add('fadeOut');
        while (this.node.firstChild) {
            this.node.removeChild(this.node.firstChild);
        }
    }
}