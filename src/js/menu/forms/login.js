/**
 * Created by Denis on 02.03.2017.
 */

import CheckFields from '../actions/checkFields';
import UserService from '../../support/service/userService';
import User from '../../game/user';
import Form from '../elements/form';
import ProgressBar from '../elements/progressBar';

export default class LoginForm {
    constructor(node) {
        this.node = node;
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
                            class: 'link router',
                            id: 'btn-to-signup',
                            href: '/signup'
                        },
                        type: 'p'
                    }
                ]
            }
        }).render();
        this.initListener();

        this.node.appendChild(this.loginForm.el);

        this.login = document.getElementById('l-login');
        this.password = document.getElementById('l-password');
        this.loginHelp = document.getElementById('l-login-help');
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
                    this.clearFields();
                    new User().obj = user;
                    // let profileDiv = document.getElementById('profile');
                    // let profile = new Profile({
                    //     data: {
                    //         login: user.login,
                    //         rating: user.rating,
                    //         button: {
                    //             text: 'Log Out',
                    //             attrs: {
                    //                 class: 'link',
                    //                 id: 'btn-logout'
                    //             },
                    //             type: 'h3'
                    //         },
                    //         div: profileDiv
                    //     }
                    // });
                    this.hideProgressBar();
                }).catch(e => {
                    this.loginForm.fields.forEach(elem => {
                        elem.setError();
                        elem.setError('wrong data');
                    });
                    this.hideProgressBar();
                    console.error(e);
                });
            }
        });
    }

    showProgressBar() {
        this.btnLogin.hidden = true;
        let progressBar = new ProgressBar().render();
        this.btnLogin.parentNode.insertBefore(progressBar, this.btnLogin.nextSibling);
    }

    hideProgressBar() {
        setTimeout(() => {
            this.btnLogin.hidden = false;
            this.btnLogin.parentNode.removeChild(this.btnLogin.nextElementSibling);
        }, 500);
    }

    checkFields() {
        let check = true;

        this.loginForm.fields.forEach(elem => {
            let result = elem.validate();
            if (check === true) {
                check = result;
            }
        });

        return check;
    }

    clearFields() {
        this.loginForm.fields.forEach(elem => {
            elem.clear();
        });
    }
}
