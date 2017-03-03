/**
 * Created by Denis on 02.03.2017.
 */
'use strict';
(function () {

    class Input {
        constructor(options) {
            this.text = options.text;
            this.attrs = options.attrs || [];
            this.el = document.createElement('input');
        }

        setAttrs(attrs) {
            Object.keys(attrs).forEach(name => {
                this.el.setAttribute(name, attrs[name]);
            })
        }

        render() {
            this.setAttrs(this.attrs);

            return this;
        }

        toString() {
            return this.el.outerHTML;
        }
    }

    window.Input = Input;
})();