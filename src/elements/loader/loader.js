/**
 * Created by Denis on 07.03.2017.
 */

import './loader.css';

export default class ProgressBar {
    constructor() {
        this.el = document.createElement('div');
    }

    /**
     * Метод возвращает элемент с абсолютной позицией
     * @return {Element|*}
     */
    getElem() {
        this.el.setAttribute('class', 'loader');
        return this.el;
    }


    /**
     * Метод возвращает элемент с позицией от родителя
     * @return {Element|*}
     */
    getElemParent() {
        this.el.setAttribute('class', 'loader_parent');
        return this.el;
    }
}