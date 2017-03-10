/**
 * Created by Denis on 02.03.2017.
 */

import CheckFields from '../actions/checkFields';
import UserService from '../../support/service/userService';
import Profile from '../elements/profile';
import User from '../../game/user';
import Form from '../elements/form';
import ProgressBar from '../elements/progressBar';
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
        }).render();
        this.initListener();

        this.loginDiv.appendChild(this.loginForm.el);

        this.login = document.getElementById('l-login');
        this.password = document.getElementById('l-password');
        this.loginHelp = document.getElementById('l-login-help');
        this.passwordHelp = document.getElementById('l-password-help');
        this.btnLogin = document.getElementById('btn-login');
    }

    initListener() {
        //Submit form
        this.loginForm.el.addEventListener('submit', event => {
            event.preventDefault();
            if (this.checkFields()) {
                let body = this.loginForm.getFormData();

                this.showProgressBar();

                new UserService().login(body).then(user => {
                    this.clearHelp();
                    this.clearFields();

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
                    new User().obj = user;
                    this.hideProgressBar();
                }, response => {
                    CheckFields.fieldSetErr(this.login);
                    CheckFields.fieldSetErr(this.password);
                    CheckFields.helpSetText(this.loginHelp, 'wrong data');
                    CheckFields.helpSetText(this.passwordHelp, 'wrong data');
                    this.hideProgressBar();
                }).catch(err => {
                    console.error(err);
                    this.hideProgressBar();
                });
            }
        });
    }

    showProgressBar() {
        this.btnLogin.hidden = true;
        let progressBar = new ProgressBar().render();
        this.btnLogin.parentNode.insertBefore(progressBar, this.btnLogin.nextSibling);
    }

    hideProgressBar(){
        ProgressBar.sleep(500);
        this.btnLogin.hidden = false;
        this.btnLogin.parentNode.removeChild(this.btnLogin.nextElementSibling);
    }

    checkFields() {
        let check = true;
        if (CheckFields.checkEmpty(this.login.value)) {
            CheckFields.fieldSetErr(this.login);
            CheckFields.helpSetText(this.loginHelp, 'empty field');
            check = false;
        } else {
            CheckFields.helpSetText(this.loginHelp, '');
            CheckFields.fieldRemoveErr(this.login);
        }
        if (CheckFields.checkEmpty(this.password.value)) {
            CheckFields.fieldSetErr(this.password);
            CheckFields.helpSetText(this.passwordHelp, 'empty field');
            check = false;
        } else {
            CheckFields.helpSetText(this.passwordHelp, '');
            CheckFields.fieldRemoveErr(this.password);
        }
        return check;
    }

    clearHelp() {
        CheckFields.helpSetText(this.loginHelp, '');
        CheckFields.helpSetText(this.passwordHelp, '');
    }

    clearFields() {
        CheckFields.fieldSetText(this.login, '');
        CheckFields.fieldSetText(this.password, '');

        CheckFields.fieldRemoveOk(this.login);
        CheckFields.fieldRemoveOk(this.password);

        CheckFields.fieldRemoveErr(this.login);
        CheckFields.fieldRemoveErr(this.password);
    }
}
