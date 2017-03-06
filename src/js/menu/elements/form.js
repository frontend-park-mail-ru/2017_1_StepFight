/**
 * Created by Denis on 02.03.2017.
 */
import Button from './btn'
import Input from './input'
export default class Form {
    constructor(options = {data: {}}) {
        this.data = options.data;
        this.el = document.createElement('form');

        this.render();
    }

    render() {
        try {
            this.setAttrs(this.data.form.attrs, this.el);
            let h3 = document.createElement('h3');
            this.setAttrs(this.data.title.attrs, h3);
            h3.innerHTML = this.data.title.text;
            this.el.appendChild(h3);
        } catch (err) {

        }
        try {
            this.fieldsAppendTo(this.getFields(), this.el);
        } catch (err) {

        }
        try {
            this.controlsAppendTo(this.getControls(), this.el);
        } catch (err) {

        }
    }

    getFields() {
        let {fields = []}=this.data;
        return fields.map(data => {
            return new Input(data).render();
        });
    }

    setAttrs(attrs, elem) {
        Object.keys(attrs).forEach(name => {
            elem.setAttribute(name, attrs[name]);
        })
    }

    fieldsAppendTo(array, elem) {
        array.forEach(item => {
            elem.appendChild(item.el);
            elem.appendChild(item.help_el);
        })
    }

    controlsAppendTo(array, elem) {
        array.forEach(item => {
            elem.appendChild(item.el);
        })
    }

    getControls() {
        let {controls = []}=this.data;
        return controls.map(data => {
            return new Button(data).render();
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

