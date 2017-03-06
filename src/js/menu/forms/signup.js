/**
 * Created by Denis on 02.03.2017.
 */

import Form from '../elements/form';
import CheckFields from '../actions/checkFields';

export default class SignupForm {

    constructor() {
        this.signupDiv = document.querySelector('#div-signup');
        this.render();
    }
    render() {
        this.signupForm = new Form({
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
        this.listener();
        this.signupDiv.appendChild(this.signupForm.el);

        this.login = document.getElementById('r-login');
        this.password = document.getElementById('r-password');
        this.repeatPassword = document.getElementById('r-repeatpassword');

        this.loginHelp = document.getElementById('r-login-help');
        this.passwordHelp = document.getElementById('r-password-help');
        this.repeatPasswordHelp = document.getElementById('r-repeatpassword-help');

    }

    listener() {
        this.signupForm.el.addEventListener('submit', event => {
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
    }
    checkFields() {
        let checkLoginArr = CheckFields.checkLogin(
            {field: login, help: loginHelp});
        let checkPasswordArr = CheckFields.checkPassword(
            {field: password, help: passwordHelp},
            {field: repeatPassword, help: repeatPasswordHelp});

        return checkLoginArr && checkPasswordArr;
    }

    clearHelp() {
        CheckFields.helpSetText(loginHelp, '');
        CheckFields.helpSetText(passwordHelp, '');
        CheckFields.helpSetText(repeatPasswordHelp, '');
    }

    clearFields() {
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
}