/**
 * Created by Denis on 02.03.2017.
 */

'use strict';

(function () {

    let Button = window.Button;
    let Input = window.Input;

    class Form {
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
                this.appendTo(this.getFields(), this.el);
            } catch (err) {

            }
            try {
                this.appendTo(this.getControlls(), this.el);
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

        appendTo(array, elem) {
            array.forEach(item => {
                elem.appendChild(item.el);
            })
        }

        getControlls() {
            let {controls = []}=this.data;
            return controls.map(data => {
                return new Button(data).render();
            });
        }

        toString() {
            return this.el.outerHTML;
        }
    }


    window.Form = Form;
})();
