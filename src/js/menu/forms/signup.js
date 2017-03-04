/**
 * Created by Denis on 02.03.2017.
 */
'use strict';

(function () {
    let signupDiv = document.querySelector('#div-signup');

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
                        type: 'text'
                    }
                },
                {
                    attrs: {
                        placeholder: 'Password',
                        id: 'r-password',
                        class: 'input',
                        type: 'password'
                    }
                },
                {
                    attrs: {
                        placeholder: 'Repeat password',
                        id: 'r-repeatpassword',
                        class: 'input',
                        type: 'password'
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
        checkFields();
    });

    signupDiv.appendChild(signupForm.el);

    let login = document.getElementById('r-login');
    let password = document.getElementById('r-password');
    let repeatPassword = document.getElementById('r-repeatpassword');

    initFieldsListeners();

    function checkFields() {
        CheckFields.checkLogin(login);
        CheckFields.checkPassword(password, repeatPassword);
    }

    function initFieldsListeners() {
        login.addEventListener('keydown', function () {
            login.classList.remove('input__error');
        });
        password.addEventListener('keydown', function () {
            password.classList.remove('input__error');
        });
        repeatPassword.addEventListener('keydown', function () {
            password.classList.remove('input__error');
        });
    }
})();