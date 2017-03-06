/**
 * Created by Denis on 02.03.2017.
 */
'use strict';

(function () {
    let CheckFields = window.CheckFields;
    let UserService = window.UserService;
    let Profile = window.Profile;
    let User = window.User;

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
                    },
                    help_attrs: {
                        id: 'l-login-help',
                        class: 'p__error'
                    }
                },
                {
                    attrs: {
                        placeholder: 'Password',
                        id: 'l-password',
                        class: 'input',
                        type: 'password',
                        name: 'password'
                    },
                    help_attrs: {
                        id: 'l-password-help',
                        class: 'p__error'
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
            new UserService().login(body).then(user => {
                clearHelp();
                clearFields();

                let modalDiv = document.getElementById('modal');
                let modalLoginDiv = document.getElementById('modal-login');
                modalDiv.classList.add('hidden');
                modalLoginDiv.classList.add('hidden');

                let profileDiv = document.getElementById('profile');
                let profile = new Profile({
                    data: {
                        login: user.login,
                        rating: user.rating,
                        button: {
                            text: 'Log Out',
                            attrs: {
                                class: 'link',
                                id: 'btn-logout'
                            },
                            type: 'h3'
                        },
                        div: profileDiv
                    }
                });


            }).catch(errResp => {
                console.log('ER=' + errResp);
                CheckFields.fieldSetErr(login);
                CheckFields.fieldSetErr(password);
                CheckFields.helpSetText(loginHelp, 'wrong data');
                CheckFields.helpSetText(passwordHelp, 'wrong data');
            });
        }
    });

    loginDiv.appendChild(loginForm.el);

    let login = document.getElementById('l-login');
    let password = document.getElementById('l-password');

    let loginHelp = document.getElementById('l-login-help');
    let passwordHelp = document.getElementById('l-password-help');

    function checkFields() {
        let check = true;
        if (CheckFields.checkEmpty(login.value)) {
            CheckFields.fieldSetErr(login);
            CheckFields.helpSetText(loginHelp, 'empty field');
            check = false;
        } else {
            CheckFields.helpSetText(loginHelp, '');
            CheckFields.fieldRemoveErr(login);
        }
        if (CheckFields.checkEmpty(password.value)) {
            CheckFields.fieldSetErr(password);
            CheckFields.helpSetText(passwordHelp, 'empty field');
            check = false;
        } else {
            CheckFields.helpSetText(passwordHelp, '');
            CheckFields.fieldRemoveErr(password);
        }
        return check;
    }

    function clearHelp() {
        CheckFields.helpSetText(loginHelp, '');
        CheckFields.helpSetText(passwordHelp, '');
    }

    function clearFields() {
        CheckFields.fieldSetText(login, '');
        CheckFields.fieldSetText(password, '');

        CheckFields.fieldRemoveOk(login);
        CheckFields.fieldRemoveOk(password);

        CheckFields.fieldRemoveErr(login);
        CheckFields.fieldRemoveErr(password);
    }
})();