/**
 * Created by Denis on 02.03.2017.
 */
import Button from './__button/form-button'
import Input from './__input/form-input'

import './form.css';
import './__button/form__button.css';
import './__help-text/form__help-text.css';
import './__input/form__input.css';
import './__input/form__input_error.css';
import './__input/form__input_ok.css';
import './__link/form__link.css';
import './__title/form__title.css';

export default class Form {
    constructor(options = {data: {}}) {
        // options - инструкции
        this.data = options.data;
        this.el = document.createElement('form');
        this.fields = [];
        this.controls = [];
        this._render();
    }

    /**
     * Отрисовка
     * @private
     */
    _render() {
        this._setAttributes(this.data.form.attrs, this.el);
        let title = document.createElement(this.data.title.type);
        this._setAttributes(this.data.title.attrs, title);
        title.innerHTML = this.data.title.text;
        this.el.appendChild(title);


        this.fields = this._getFields();
        this.controls = this._getControls();
        this._fieldsAppendTo(this.fields, this.el);

        this._controlsAppendTo(this.controls, this.el);
    }

    /**
     * Возвращает элемент form
     * @return {Form}
     */
    getElem(){
        return this;
    }

    /**
     * Возвращает массив полей формы
     * @return {Array}
     * @private
     */
    _getFields() {
        let {fields = []}=this.data;
        return fields.map(data => {
            return new Input(data).getElem();
        });
    }

    /**
     * Установка атрибутов
     * @param attributes - массив атрибутов
     * @param elem - элемент к которому применяем атрибуты
     * @private
     */
    _setAttributes(attributes, elem) {
        Object.keys(attributes).forEach(name => {
            elem.setAttribute(name, attributes[name]);
        })
    }

    /**
     * Присоединение полей к элементу
     * @param array - массив полей
     * @param elem - элемент, к которому присоединяем
     * @private
     */
    _fieldsAppendTo(array, elem) {
        array.forEach(item => {
            elem.appendChild(item.el);
            elem.appendChild(item.help_el);
        })
    }

    /**
     * Присоединение элементов управления
     * @param array - массив элементов
     * @param elem - элемент, к которому присоединяем
     * @private
     */
    _controlsAppendTo(array, elem) {
        array.forEach(item => {
            elem.appendChild(item.el);
        })
    }

    /**
     * Возвращает массив управляющих элементов формы
     * @return {Array}
     * @private
     */
    _getControls() {
        let {controls = []}=this.data;
        return controls.map(data => {
            return new Button(data).getElem();
        });
    }

    /**
     * Возвращает объект данных из формы
     * @return {{}}
     */
    getFormData() {
        let elements = this.el.elements;
        let fields = {};

        Object.keys(elements).forEach(element => {
            let name = elements[element].name;
            let value = elements[element].value;

            if (!name) {
                return;
            }

            fields[name] = value;
        });
        return fields;
    }
}

