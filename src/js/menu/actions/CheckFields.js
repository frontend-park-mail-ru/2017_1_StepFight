/**
 * Created by Denis on 03.03.2017.
 */
export default class CheckFields {
    constructor() {

    }

    /**
     * Проверка на латиницу
     * @param value - текст для проверка
     * @return {boolean} false - найдены латинские символы
     * @private
     */
    static _checkLatin(value) {
        return value.match(/[а-яА-ЯёЁ]+/) === null;
    }

    /**
     * Проверка на валидность логина
     * @param obj - {field - элемент поля, help - элемент текста помощи для поля}
     * @return {boolean} true - поле валидно
     */
    static checkLogin(obj) {
        let arr = [];
        if (!this._checkLatin(obj.field.value)) {
            arr.push({
                err_text: 'Only Latin',
            })
        }
        if (obj.field.value.length < 4) {
            arr.push({
                err_text: '4 - min length',
            });
        }

        obj.help.textContent = '';
        arr.forEach(item => {
            this.fieldSetErr(obj.field);
            this.fieldRemoveOk(obj.field);

            if (obj.help.textContent === '') {
                obj.help.textContent = item.err_text;
            } else {
                obj.help.textContent = `${obj.help.textContent},${item.err_text}`;
                console.log(obj.help.textContent);
            }
        });

        if (arr.length === 0) {
            this.fieldSetOk(obj.field);
        }

        return arr.length === 0;
    }

    /**
     * Проверка на длину пароля
     * @param value
     * @return {boolean} true - валидно
     * @private
     */
    static _checkPassLength(value) {
        return value.length >= 8;
    }

    /**
     * Проверка на эквивалентоность
     * @param value1
     * @param value2
     * @return {boolean} true - валидно
     * @private
     */
    static _checkPassEquals(value1, value2) {
        return value1 === value2;
    }

    /**
     * Провека текста на пустоту
     * @param value
     * @return {boolean} true - пустое поле
     */
    static checkEmpty(value) {
        return value.length === 0;
    }

    /**
     * Проверка паролей на валидность
     * @param obj1 - {field - элемент поля, help - элемент текста помощи для поля}
     * @param obj2 - {field - элемент поля, help - элемент текста помощи для поля}
     * @return {boolean} true - поле валидно
     */
    static checkPassword(obj1, obj2) {
        let arr = [];
        let check = true;

        if (check) {
            if (!this._checkPassLength(obj1.field.value)) {
                arr.push({
                    err_text: '8 - min length',
                    field: obj1.field,
                    help: obj1.help
                })
            }
            if (!this._checkPassEquals(obj1.field.value, obj2.field.value)) {
                arr.push({
                    err_text: 'Passwords not equals',
                    field: obj1.field,
                    help: obj1.help
                });
                arr.push({
                    err_text: 'Passwords not equals',
                    field: obj2.field,
                    help: obj2.help
                });
            }
        }

        obj1.help.textContent = '';
        obj2.help.textContent = '';
        arr.forEach(item => {
            this.fieldSetErr(item.field);
            this.fieldRemoveOk(item.field);

            if (item.help.textContent === '') {
                item.help.textContent = item.err_text;
            } else {
                item.help.textContent = `${item.help.textContent}.${item.err_text}`;
            }
        });

        if (arr.length === 0) {
            this.fieldSetOk(obj1.field);
            this.fieldSetOk(obj2.field);
        }
        return arr.length === 0;
    }

    static helpSetText(elem, value) {
        elem.textContent = value;
    }

    static fieldSetText(elem, value) {
        elem.value = value;
    }

    static fieldSetErr(elem) {
        elem.classList.add('form__input_error');
    }

    static fieldRemoveErr(elem) {
        elem.classList.remove('form__input_error');
    }

    static fieldSetOk(elem) {
        elem.classList.add('form__input_ok');
    }

    static fieldRemoveOk(elem) {
        elem.classList.remove('form__input_ok');
    }

}
