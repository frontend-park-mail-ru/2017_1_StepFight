/**
 * Created by Denis on 02.03.2017.
 */
import CheckFields from '../actions/checkFields';

export default class Input {
    constructor(options) {
        this.text = options.text;
        this.attrs = options.attrs || [];
        this.help_attrs = options.help_attrs || [];
        this.el = document.createElement('input');
        this.help_el = document.createElement('p');
    }

    _setAttrs(attrs, elem) {
        Object.keys(attrs).forEach(name => {
            elem.setAttribute(name, attrs[name]);
        })
    }

    render() {
        this._setAttrs(this.attrs, this.el);
        this._setAttrs(this.help_attrs, this.help_el);

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
            check = false;
        } else {
            CheckFields.fieldRemoveErr(this.el);
            CheckFields.helpSetText(this.help_el, '');

            const valid = this.el.getAttribute('valid');
            if (valid === 'login') {
                let result = CheckFields.checkLogin({field: this.el, help: this.help_el});
                if (check == true) {
                    check = result;
                }
            } else if (valid === 'password') {

            } else if (valid === 'repeatpassword') {
                let result = CheckFields.checkPassword(
                    {field: prev.el, help: prev.help_el},
                    {field: this.el, help: this.help_el});
                if (check === true) {
                    check = result;
                }
            }
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
