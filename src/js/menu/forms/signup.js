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
                        type: 'text',
                        name: 'login'
                    }
                },
                {
                    attrs: {
                        placeholder: 'Password',
                        id: 'r-password',
                        class: 'input',
                        type: 'password',
                        name: 'password'
                    }
                },
                {
                    attrs: {
                        placeholder: 'Repeat password',
                        id: 'r-repeatpassword',
                        class: 'input',
                        type: 'password',
                        name: 'repeatpassword'
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
            new UserService().signup(body);
        }
    });

    signupDiv.appendChild(signupForm.el);

    let login = document.getElementById('r-login');
    let password = document.getElementById('r-password');
    let repeatPassword = document.getElementById('r-repeatpassword');

    function checkFields() {
        let checkLoginArr = CheckFields.checkLogin(login);
        let checkPasswordArr = CheckFields.checkPassword(password, repeatPassword);

        const result = checkLoginArr.length == 0 && checkPasswordArr == 0;
        if (!result) {
            setErrors(checkLoginArr.concat(checkPasswordArr));
        }
        return result;
    }

    function setErrors(arr) {
        //TODO set errors on view
    }
})();