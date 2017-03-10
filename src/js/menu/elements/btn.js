/**
 * Created by Denis on 02.03.2017.
 */
export default class Button {
    constructor(options) {
        this.text = options.text;
        this.attrs = options.attrs || [];
        this.el = document.createElement(options.type);
    }

    setAttrs(attrs) {
        Object.keys(attrs).forEach(name => {
            this.el.setAttribute(name, attrs[name]);
        })
    }

    render() {
        this.el.innerHTML = this.text;
        this.setAttrs(this.attrs);
        return this;
    }

    toString() {
        return this.el.outerHTML;
    }
}
