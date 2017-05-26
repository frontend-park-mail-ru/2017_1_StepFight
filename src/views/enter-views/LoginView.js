/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from "../BaseView";
import ProgressBar from "../../elements/loader/loader";
import Form from "../../elements/form/form";
import UserService from "../../js/support/service/UserService";

export default class LoginView extends BaseView {
    constructor(node, storage, router) {
        super(node);
        this.node = node;
        this.storage = storage;
        this.router = router;
    }

    /**
     * Отрисовка вьюшки
     */
    render() {
        super.renderView();
        this._showViewProgressBar();
        this.loginForm = new Form({
            data: {
                title: {
                    text: 'Log In',
                    type: 'h3',
                    attrs: {
                        class: 'form__title'
                    }
                },
                form: {
                    attrs: {
                        class: 'form',
                        action: '',
                        method: ''
                    }
                },
                fields: [
                    {
                        attrs: {
                            placeholder: 'Login',
                            id: 'l-login',
                            class: 'form__input',
                            type: 'text',
                            name: 'login'
                        },
                        help_attrs: {
                            id: 'l-login-help',
                            class: 'form__help-text'
                        }
                    },
                    {
                        attrs: {
                            placeholder: 'Password',
                            id: 'l-password',
                            class: 'form__input',
                            type: 'password',
                            name: 'password'
                        },
                        help_attrs: {
                            id: 'l-password-help',
                            class: 'form__help-text'
                        }
                    }
                ],
                controls: [
                    {
                        text: 'Enter',
                        attrs: {
                            type: 'submit',
                            class: 'form__button',
                            id: 'btn-login'
                        },
                        type: 'button'
                    },
                    {
                        type: 'а',
                        attrs: {
                            class: 'form__vk-button',
                            id: 'vk-auth'
                        },
                        text: 'Вход через VK'
                    },
                    {
                        text: 'Sign up',
                        attrs: {
                            class: 'form__link',
                            id: 'btn-to-signup',
                            href: this.storage.urls.SIGNUP
                        },
                        type: 'a'
                    }
                ]
            }
        }).getElem();

        setTimeout(() => {
            this._hideViewProgressBar();

            let title = document.createElement('a');
            title.setAttribute('href', this.storage.urls.MAIN);
            title.setAttribute('class', 'main-title');
            let h1 = document.createElement('h1');
            h1.innerText = 'Step Fight';
            title.appendChild(h1);

            this.node.appendChild(title);
            this.node.appendChild(this.loginForm.el);

            this.login = document.getElementById('l-login');
            this.password = document.getElementById('l-password');
            this.loginHelp = document.getElementById('l-login-help');
            this.btnLogin = document.getElementById('btn-login');
            this.btnToSignUp = document.getElementById('btn-to-signup');

            this.vkAuth = document.getElementById('vk-auth');


            this._initListener();
        }, 500);
    }

    /**
     * Показать прогресс бар вьюшки
     * @private
     */
    _showViewProgressBar() {
        let progressBar = new ProgressBar().getElem();
        this.node.appendChild(progressBar);
    }

    /**
     * Спрятать прогресс бар вьюшки
     * @private
     */
    _hideViewProgressBar() {
        this.node.removeChild(this.node.lastChild);
    }

    /**
     * Показать прогресс бар формы
     * @private
     */
    _showProgressBar() {
        this.btnLogin.hidden = true;
        this.vkAuth.hidden = true;
        let progressBar = new ProgressBar().getElemParent();
        this.btnLogin.parentNode.insertBefore(progressBar, this.btnLogin.nextSibling);
    }

    /**
     * Спрятать прогресс бар формы
     * @private
     */
    _hideProgressBar() {
        setTimeout(() => {
            this.btnLogin.hidden = false;
            this.vkAuth.hidden = false;
            this.btnLogin.parentNode.removeChild(this.btnLogin.nextElementSibling);
        }, 500);
    }

    /**
     * Запуск слушателей на форму
     * @private
     */
    _initListener() {
        //Submit form
        this.loginForm.el.addEventListener('submit', event => {
            event.preventDefault();
            if (this._checkFields()) {
                let body = this.loginForm.getFormData();

                this._showProgressBar();

                new UserService().login(body).then(user => {
                    console.log(user);
                    this._clearFields();
                    this.storage.user = user;
                    this.router.go(this.storage.urls.PROFILE, true);

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
        this.btnToSignUp.addEventListener('click', event => {
            this._clearFields();
        });

        this.vkAuth.addEventListener('click', (event) => {
            event.preventDefault();
            VK.Auth.getLoginStatus((response) => {
                if (response) {
                    console.warn(response);
                }
                else {
                    VK.Auth.login(null, VK.access.FRIENDS);
                }
            });
        });

        VK.Observer.subscribe('auth.login', (response) => {
            //console.warn(response.session.user);
            //new UserService().signup({login: response.session.user.domain})
        });
    }

    /**
     * Отчистка полей формы
     * @private
     */
    _clearFields() {
        this.loginForm.fields.forEach(elem => {
            elem.clear();
        });
    }

    /**
     * Проверка полей формы
     * @return {boolean}
     * @private
     */
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