/**
 * Created by Denis on 03.03.2017.
 */
'use strict';

(function () {

    class CheckFields {
        constructor() {

        }

        static checkLatin(value) {
            return value.match(/[а-яА-ЯёЁ]+/) == null;
        }

        static checkLogin(field) {
            let arr = [];
            if (this.checkEmpty(field.value)) {
                arr.push({
                    err_text: 'empty field',
                    field: field
                });
            } else {
                if (!this.checkLatin(field.value)) {
                    arr.push({
                        err_text: 'Only Latin',
                        field: field
                    })
                }
                if (field.value.length < 4) {
                    arr.push({
                        err_text: '4 - min length',
                        field: field
                    });
                }
            }
            return arr;
        }

        static checkPassLength(value) {
            return value.length >= 8;
        }

        static checkPassEquals(value1, value2) {
            return value1 === value2;
        }

        static checkEmpty(value) {
            return value.length == 0;
        }


        static checkPassword(field1, field2) {
            let arr = [];
            if (this.checkEmpty(field1.value)) {
                arr.push({
                    err_text: 'empty field',
                    field: field1
                });
            } else {
                if (!this.checkPassLength(field1.value)) {
                    arr.push({
                        err_text: '8 - min length',
                        field: field1
                    })
                }
                if (!this.checkPassEquals(field1.value, field2.value)) {
                    arr.push({
                        err_text: 'Passwords not equals',
                        field: field1
                    });
                    arr.push({
                        err_text: 'Passwords not equals',
                        field: field2
                    });
                }
            }
            return arr;
        }
    }

    window.CheckFields = CheckFields;
})();
