/**
 * Created by Denis on 02.03.2017.
 */
'use strict';

(function () {
    let signupDiv = document.querySelector('#div-signup');
    let CheckFields = window.CheckFields;


    let signupForm = new Form({
        data: {
            title: {
                text: 'Sign up',
                attrs: {
                    class: 'text-center',
                }
            },
            form: {
                attrs: {
                    class: 'fcontainer-column',
                    action: '',
                    method: ''
                }
            },
            fields: [
                {
                    attrs: {
                        placeholder: 'Login',
                        id: 'r-login',
                        class: 'input',
                        type: 'text',
                        name: 'login'
                    },
                    help_attrs: {
                        id: 'r-login-help',
                        class: 'p__error'
                    }
                },
                {
                    attrs: {
                        placeholder: 'Password',
                        id: 'r-password',
                        class: 'input',
                        type: 'password',
                        name: 'password'
                    },
                    help_attrs: {
                        id: 'r-password-help',
                        class: 'p__error'
                    }
                },
                {
                    attrs: {
                        placeholder: 'Repeat password',
                        id: 'r-repeatpassword',
                        class: 'input',
                        type: 'password',
                        name: 'repeatpassword'
                    },
                    help_attrs: {
                        id: 'r-repeatpassword-help',
                        class: 'p__error'
                    }
                }
            ],
            controls: [
                {
                    text: 'Registrate',
                    attrs: {
                        type: 'submit',
                        class: 'btn',
                        id: 'btn-signup'
                    },
                    type: 'button'
                },
                {
                    text: 'Log In',
                    attrs: {
                        class: 'link',
                        id: 'btn-to-login'
                    },
                    type: 'p'
                }
            ]
        }
    });

    signupForm.el.addEventListener('submit', event => {
        event.preventDefault();

        if (checkFields()) {
            let body = signupForm.getFormData();
            new UserService().signup(body).then(success => {
                console.log('success reg');
                clearHelp();
                clearFields();
            }).catch(err => {
                CheckFields.fieldRemoveOk(login);
                CheckFields.fieldSetErr(login);
                CheckFields.helpSetText(loginHelp, 'login used');
            });
        }
    });

    signupDiv.appendChild(signupForm.el);

    let login = document.getElementById('r-login');
    let password = document.getElementById('r-password');
    let repeatPassword = document.getElementById('r-repeatpassword');

    let loginHelp = document.getElementById('r-login-help');
    let passwordHelp = document.getElementById('r-password-help');
    let repeatPasswordHelp = document.getElementById('r-repeatpassword-help');

    function checkFields() {
        let checkLoginArr = CheckFields.checkLogin(
            {field: login, help: loginHelp});
        let checkPasswordArr = CheckFields.checkPassword(
            {field: password, help: passwordHelp},
            {field: repeatPassword, help: repeatPasswordHelp});

        return checkLoginArr && checkPasswordArr;
    }

    function clearHelp() {
        CheckFields.helpSetText(loginHelp, '');
        CheckFields.helpSetText(passwordHelp, '');
        CheckFields.helpSetText(repeatPasswordHelp, '');
    }

    function clearFields() {
        CheckFields.fieldSetText(login, '');
        CheckFields.fieldSetText(password, '');
        CheckFields.fieldSetText(repeatPassword, '');

        CheckFields.fieldRemoveOk(login);
        CheckFields.fieldRemoveOk(password);
        CheckFields.fieldRemoveOk(repeatPassword);

        CheckFields.fieldRemoveErr(login);
        CheckFields.fieldRemoveErr(password);
        CheckFields.fieldRemoveErr(repeatPassword);
    }
})();