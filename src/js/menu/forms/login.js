/**
 * Created by Denis on 02.03.2017.
 */
'use strict';

(function () {
    let CheckFields = window.CheckFields;
    let UserService = window.UserService;

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
                        type: 'text',
                        name: 'login'
                    }
                },
                {
                    attrs: {
                        placeholder: 'Password',
                        id: 'l-password',
                        class: 'input',
                        type: 'password',
                        name: 'password'
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
        if (checkFields()) {
            let body = loginForm.getFormData();
            new UserService().login(body);
        }
    });

    loginDiv.appendChild(loginForm.el);

    let login = document.getElementById('l-login');
    let password = document.getElementById('l-password');

    function checkFields() {
        const result = !CheckFields.checkEmpty(login.value) && !CheckFields.checkEmpty(password.value);
        if (!result) {
            setErrors();
        }
        return result;
    }

    function setErrors() {
        //TODO set errors on view
    }
})();