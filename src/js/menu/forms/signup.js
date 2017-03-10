/**
 * Created by Denis on 02.03.2017.
 */

import Form from '../elements/form';
import CheckFields from '../actions/checkFields';
import UserService from '../../support/service/userService';
import ProgressBar from '../elements/progressBar';

export default class SignUpForm {

    constructor() {
        this.signupDiv = document.querySelector('#div-signup');
        this.loginDiv = document.querySelector('#div-login');
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
        }).render();
        this.initListener();
        this.signupDiv.appendChild(this.signupForm.el);

        this.login = document.getElementById('r-login');
        this.password = document.getElementById('r-password');
        this.repeatPassword = document.getElementById('r-repeatpassword');

        this.loginHelp = document.getElementById('r-login-help');
        this.passwordHelp = document.getElementById('r-password-help');
        this.repeatPasswordHelp = document.getElementById('r-repeatpassword-help');

        this.btnSignUp = document.getElementById('btn-signup');
    }

    initListener() {
        //Submit form
        this.signupForm.el.addEventListener('submit', event => {
            event.preventDefault();

            if (this.checkFields()) {
                let body = this.signupForm.getFormData();

                this.showProgressBar();

                new UserService().signup(body).then(response => {
                    console.log('success reg');
                    this.clearHelp();
                    this.clearFields();
                    this.hideProgressBar();
                    this.openLogin();
                }, response => {
                    CheckFields.fieldRemoveOk(this.login);
                    CheckFields.fieldSetErr(this.login);
                    CheckFields.helpSetText(this.loginHelp, 'login used');
                    this.hideProgressBar();
                }).catch(err => {
                    this.hideProgressBar();
                    console.error(err);
                });
            }
        });
    }

    showProgressBar() {
        this.btnSignUp.hidden = true;
        let progressBar = new ProgressBar().render();
        this.btnSignUp.parentNode.insertBefore(progressBar, this.btnSignUp.nextSibling);
    }

    hideProgressBar(){
        ProgressBar.sleep(500);
        this.btnSignUp.hidden = false;
        this.btnSignUp.parentNode.removeChild(this.btnSignUp.nextElementSibling);
    }

    openLogin(){
        this.signupDiv.classList.add('hidden');
        this.loginDiv.classList.remove('hidden');
        alert('Successfully registration');
    }

    checkFields() {
        let checkLoginArr = CheckFields.checkLogin(
            {field: this.login, help: this.loginHelp});
        let checkPasswordArr = CheckFields.checkPassword(
            {field: this.password, help: this.passwordHelp},
            {field: this.repeatPassword, help: this.repeatPasswordHelp});

        return checkLoginArr && checkPasswordArr;
    }

    clearHelp() {
        CheckFields.helpSetText(this.loginHelp, '');
        CheckFields.helpSetText(this.passwordHelp, '');
        CheckFields.helpSetText(this.repeatPasswordHelp, '');
    }

    clearFields() {
        CheckFields.fieldSetText(this.login, '');
        CheckFields.fieldSetText(this.password, '');
        CheckFields.fieldSetText(this.repeatPassword, '');

        CheckFields.fieldRemoveOk(this.login);
        CheckFields.fieldRemoveOk(this.password);
        CheckFields.fieldRemoveOk(this.repeatPassword);

        CheckFields.fieldRemoveErr(this.login);
        CheckFields.fieldRemoveErr(this.password);
        CheckFields.fieldRemoveErr(this.repeatPassword);
    }
}