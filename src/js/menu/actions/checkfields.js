/**
 * Created by Denis on 03.03.2017.
 */
'use strict';

(function () {

    class CheckFields {
        constructor() {

        }

        static checkLatin(field) {
            return field.value.match(/[а-яА-ЯёЁ]+/) == null;
        }

        static checkLogin(field) {
            let arr = [];
            if (!this.checkLatin(field)) {
                arr.push({
                    err_text: 'Only Latin'
                })
            }
            if (field.value.length < 4) {
                arr.push({
                    err_text: '4 - min length'
                });
            }
            if(arr.length > 0){
                field.classList.add('input__error');
            }
        }

        static checkPassLength(field) {
            return field.value.length >= 8;
        }

        static checkPassEquals(field1, field2) {
            return field1.value === field2.value;
        }


        static checkPassword(field1, field2){
            let arr = [];
            if (!this.checkPassLength(field1)) {
                arr.push({
                    err_text: '8 - min length',
                    field: field1
                })
            }
            if (!this.checkPassEquals(field1, field2)) {
                arr.push({
                    err_text: 'Passwords not equals',
                    field: field1
                });
                arr.push({
                    err_text: 'Passwords not equals',
                    field: field2
                });
            }
            if(arr.length > 0){
                arr.forEach(err=>{
                    err.field.classList.add('input__error');
                });
            }
        }
    }

    window.CheckFields = CheckFields;
})();
