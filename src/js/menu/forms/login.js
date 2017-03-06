/**
 * Created by Denis on 02.03.2017.
 */

import CheckFields from '../actions/checkFields';
import UserService from '../../support/service/userService';
import Profile from '../elements/profile';
import User from '../../game/user';
import Form from '../elements/form';
export default class LoginForm {
    constructor() {
        this.loginDiv = document.querySelector('#div-login');
        this.render();
    }

    render() {
        this.loginForm = new Form({
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
        this.listener();
        this.loginDiv.appendChild(this.loginForm.el);

        this.login = document.getElementById('l-login');
        this.password = document.getElementById('l-password');
        this.loginHelp = document.getElementById('l-login-help');
        this.passwordHelp = document.getElementById('l-password-help');
    }

    listener() {
        this.loginForm.el.addEventListener('submit', event => {
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
    }

    checkFields() {
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

    clearHelp() {
        CheckFields.helpSetText(loginHelp, '');
        CheckFields.helpSetText(passwordHelp, '');
    }

    clearFields() {
        CheckFields.fieldSetText(login, '');
        CheckFields.fieldSetText(password, '');

        CheckFields.fieldRemoveOk(login);
        CheckFields.fieldRemoveOk(password);

        CheckFields.fieldRemoveErr(login);
        CheckFields.fieldRemoveErr(password);
    }
}
