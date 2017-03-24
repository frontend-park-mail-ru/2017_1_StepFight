/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from '../baseView';
import ProgressBar from "../../menu/elements/progressBar";
import Form from "../../menu/elements/form";
import UserService from "../../support/service/userService";
import User from "../../game/user";
import RouterUrls from "../../support/router/routerUrls";

export default class LoginView extends BaseView {
    constructor(node, router) {
        super(node);
        this.node = node;
        this._showViewProgressBar();
        this._render();
        this.router = router;
        this.urls = new RouterUrls();
    }

    _render() {
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
                            href: this.urls.SIGNUP
                        },
                        type: 'a'
                    }
                ]
            }
        }).getElem();

        setTimeout(() => {
            this._hideViewProgressBar();
            this.node.appendChild(this.loginForm.el);

            this.login = document.getElementById('l-login');
            this.password = document.getElementById('l-password');
            this.loginHelp = document.getElementById('l-login-help');
            this.btnLogin = document.getElementById('btn-login');
            this.btnToSignUp = document.getElementById('btn-to-signup');

            this._initListener();
        }, 500);
    }

    _showViewProgressBar() {
        let progressBar = new ProgressBar().getElem();
        this.node.appendChild(progressBar);
    }

    _hideViewProgressBar() {
        this.node.removeChild(this.node.lastChild);
    }

    _showProgressBar() {
        this.btnLogin.hidden = true;
        let progressBar = new ProgressBar().getElem();
        this.btnLogin.parentNode.insertBefore(progressBar, this.btnLogin.nextSibling);
    }

    _hideProgressBar() {
        setTimeout(() => {
            this.btnLogin.hidden = false;
            this.btnLogin.parentNode.removeChild(this.btnLogin.nextElementSibling);
        }, 500);
    }

    _initListener() {
        //Submit form
        this.loginForm.el.addEventListener('submit', event => {
            event.preventDefault();
            if (this._checkFields()) {
                let body = this.loginForm.getFormData();

                this._showProgressBar();

                new UserService().login(body).then(user => {
                    this._clearFields();
                    new User().obj = user;
                    this.router._setCurrView(this.urls.PROFILE);

                    this._hideProgressBar();
                }).catch(e => {
                    this.loginForm.fields.forEach(elem => {
                        elem.setError();
                        elem.setError('wrong data');
                    });
                    this._hideProgressBar();
                    console.error(e);
                });
            }
        });
        this.btnToSignUp.addEventListener('click', event=>{
            this._clearFields();
        })
    }

    _clearFields() {
        this.loginForm.fields.forEach(elem => {
            elem.clear();
        });
    }

    _checkFields() {
        let check = true;

        this.loginForm.fields.forEach(elem => {
            let result = elem.validate();
            if (check === true) {
                check = result;
            }
        });

        return check;
    }
}