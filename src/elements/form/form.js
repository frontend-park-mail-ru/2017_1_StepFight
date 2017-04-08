/**
 * Created by Denis on 02.03.2017.
 */
import Button from './__button/form-button'
import Input from './__input/form-input'
export default class Form {
    constructor(options = {data: {}}) {
        this.data = options.data;
        this.el = document.createElement('form');
        this.fields = [];
        this.controls = [];
        this._render();
    }

    _render() {
        this._setAttrs(this.data.form.attrs, this.el);
        let title = document.createElement(this.data.title.type);
        this._setAttrs(this.data.title.attrs, title);
        title.innerHTML = this.data.title.text;
        this.el.appendChild(title);


        this.fields = this._getFields();
        this.controls = this._getControls();
        this._fieldsAppendTo(this.fields, this.el);

        this._controlsAppendTo(this.controls, this.el);
    }

    getElem(){
        return this;
    }

    _getFields() {
        let {fields = []}=this.data;
        return fields.map(data => {
            return new Input(data).getElem();
        });
    }

    _setAttrs(attrs, elem) {
        Object.keys(attrs).forEach(name => {
            elem.setAttribute(name, attrs[name]);
        })
    }

    _fieldsAppendTo(array, elem) {
        array.forEach(item => {
            elem.appendChild(item.el);
            elem.appendChild(item.help_el);
        })
    }

    _controlsAppendTo(array, elem) {
        array.forEach(item => {
            elem.appendChild(item.el);
        })
    }

    _getControls() {
        let {controls = []}=this.data;
        return controls.map(data => {
            return new Button(data).getElem();
        });
    }

    toString() {
        return this.el.outerHTML;
    }

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

