/**
 * Created by Denis on 02.03.2017.
 */
import './form__button.scss';


export default class FormButton {
    constructor(options) {
        this.text = options.text;
        this.attrs = options.attrs || [];
        this.el = document.createElement(options.type);
        this._render();
    }

    /**
     * Установить элементу атрибуты
     * @param attributes - массив атрибутов
     * @private
     */
    _setAttributes(attributes) {
        Object.keys(attributes).forEach(name => {
            this.el.setAttribute(name, attributes[name]);
        })
    }

    /**
     * возвращает объект кнопки
     * @return {FormButton}
     */
    getElem(){
        return this;
    }

    /**
     * Отрисовка
     * @private
     */
    _render() {
        this.el.innerHTML = this.text;
        this._setAttributes(this.attrs);
    }
}
