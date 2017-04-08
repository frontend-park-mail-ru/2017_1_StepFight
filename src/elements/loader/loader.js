/**
 * Created by Denis on 07.03.2017.
 */

export default class ProgressBar {
    constructor() {
        this.el = document.createElement('div');
    }

    getElem() {
        this.el.setAttribute('class', 'loader');
        return this.el;
    }

    getElemParent() {
        this.el.setAttribute('class', 'loader_parent');
        return this.el;
    }
}