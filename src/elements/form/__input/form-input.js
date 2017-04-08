/**
 * Created by Denis on 02.03.2017.
 */
import CheckFields from "../../../js/menu/actions/CheckFields";

export default class Input {
    constructor(options) {
        this.text = options.text;
        this.attrs = options.attrs || [];
        this.help_attrs = options.help_attrs || [];
        this.el = document.createElement('input');
        this.help_el = document.createElement('p');
        this._render();
    }

    _setAttrs(attrs, elem) {
        Object.keys(attrs).forEach(name => {
            elem.setAttribute(name, attrs[name]);
        })
    }

    _render() {
        this._setAttrs(this.attrs, this.el);
        this._setAttrs(this.help_attrs, this.help_el);
    }

    getElem() {
        return this;
    }

    toString() {
        return this.el.outerHTML;
    }

    validate(prev) {
        let check = true;
        if (CheckFields.checkEmpty(this.el.value)) {
            CheckFields.fieldSetErr(this.el);
            CheckFields.helpSetText(this.help_el, 'empty field');
            return false;
        }
        CheckFields.fieldRemoveErr(this.el);
        CheckFields.helpSetText(this.help_el, '');

        const valid = this.el.getAttribute('valid');
        if (valid === 'login') {
            return CheckFields.checkLogin({field: this.el, help: this.help_el});
        } else if (valid === 'password') {

        } else if (valid === 'repeatpassword') {
            return CheckFields.checkPassword(
                {field: prev.el, help: prev.help_el},
                {field: this.el, help: this.help_el});
        }

        return check;
    }

    clear() {
        CheckFields.helpSetText(this.help_el, '');
        CheckFields.fieldSetText(this.el, '');
        CheckFields.fieldRemoveOk(this.el);
        CheckFields.fieldRemoveErr(this.el);
    }

    //noinspection JSDuplicatedDeclaration
    setError() {
        CheckFields.fieldSetErr(this.el);
    }

    //noinspection JSDuplicatedDeclaration
    setError(value) {
        CheckFields.fieldSetErr(this.el);
        CheckFields.helpSetText(this.help_el, value);
    }
}
