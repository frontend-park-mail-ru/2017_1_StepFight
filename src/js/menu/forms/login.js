/**
 * Created by Denis on 02.03.2017.
 */
'use strict';

(function () {
    let CheckFields = window.CheckFields;

    let loginDiv = document.querySelector('#div-login');

    let loginForm = new Form({
        data: {
            title: {
                text: 'Log In',
                attrs: {
                    class: 'text-center'
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
                        id: 'l-login',
                        class: 'input',
                        type: 'text'
                    }
                },
                {
                    attrs: {
                        placeholder: 'Password',
                        id: 'l-password',
                        class: 'input',
                        type: 'password'
                    }
                }
            ],
            controls: [
                {
                    text: 'Enter',
                    attrs: {
                        type: 'submit',
                        class: 'btn',
                        id: 'btn-login'
                    },
                    type: 'button'
                },
                {
                    text: 'Sign up',
                    attrs: {
                        class: 'link',
                        id: 'btn-to-signup'
                    },
                    type: 'p'
                }
            ]
        }
    });

    loginForm.el.addEventListener('submit', event => {
        event.preventDefault();
        //TODO check fields
    });

    loginDiv.appendChild(loginForm.el);

    let login = document.getElementById('l-login');
    let password = document.getElementById('l-password');

    initFieldsListeners();


    function initFieldsListeners() {
        login.addEventListener('keydown', function () {
            login.classList.remove('input__error');
        });
        password.addEventListener('keydown', function () {
            password.classList.remove('input__error');
        });
    }
})();