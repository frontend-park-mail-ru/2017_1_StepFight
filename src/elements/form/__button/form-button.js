/**
 * Created by Denis on 02.03.2017.
 */
export default class FormButton {
    constructor(options) {
        this.text = options.text;
        this.attrs = options.attrs || [];
        this.el = document.createElement(options.type);
        this._render();
    }

    _setAttrs(attrs) {
        Object.keys(attrs).forEach(name => {
            this.el.setAttribute(name, attrs[name]);
        })
    }

    getElem(){
        return this;
    }

    _render() {
        this.el.innerHTML = this.text;
        this._setAttrs(this.attrs);
    }

    toString() {
        return this.el.outerHTML;
    }
}
