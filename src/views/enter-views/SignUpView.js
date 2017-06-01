/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from '../BaseView';
import Form from "../../elements/form/form";
import ProgressBar from "../../elements/loader/loader";
import CheckFields from "../../js/menu/actions/CheckFields";
import IziToast from 'izitoast';
import UserService from "../../js/support/service/UserService";

export default class SignUpView extends BaseView{
    constructor(node, storage, router){
        super(node);
        this.node = node;
        this.storage = storage;
        this.router = router;
    }

    /**
     * Отрисовка вьюшки
     * @private
     */
    render() {
        super.renderView();
        this._showViewProgressBar();
        this.signupForm = new Form({
            data: {
                title: {
                    text: 'Sign up',
                    type: 'h3',
                    attrs: {
                        class: 'form__title',
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
                            id: 'r-login',
                            class: 'form__input',
                            type: 'text',
                            name: 'login',
                            valid: 'login'
                        },
                        help_attrs: {
                            id: 'r-login-help',
                            class: 'form__help-text'
                        }
                    },
                    {
                        attrs: {
                            placeholder: 'Password',
                            id: 'r-password',
                            class: 'form__input',
                            type: 'password',
                            name: 'password',
                            valid: 'password'
                        },
                        help_attrs: {
                            id: 'r-password-help',
                            class: 'form__help-text'
                        }
                    },
                    {
                        attrs: {
                            placeholder: 'Repeat password',
                            id: 'r-repeatpassword',
                            class: 'form__input',
                            type: 'password',
                            name: 'repeatpassword',
                            valid: 'repeatpassword'
                        },
                        help_attrs: {
                            id: 'r-repeatpassword-help',
                            class: 'form__help-text'
                        }
                    }
                ],
                controls: [
                    {
                        text: 'Registrate',
                        attrs: {
                            type: 'submit',
                            class: 'form__button',
                            id: 'btn-signup'
                        },
                        type: 'button'
                    },
                    {
                        type: 'а',
                        attrs: {
                            class: 'form__vk-button hidden',
                            id: 'vk-auth'
                        },
                        text: 'Вход через VK'
                    },
                    {
                        text: 'Log In',
                        attrs: {
                            class: 'form__link',
                            id: 'btn-to-login',
                            href: this.storage.urls.LOGIN
                        },
                        type: 'a'
                    }
                ]
            }
        }).getElem();
        setTimeout(()=>{
            this._hideViewProgressBar();

            let title = document.createElement('a');
            title.setAttribute('href', this.storage.urls.MAIN);
            title.setAttribute('class', 'main-title');
            let h1 = document.createElement('h1');
            h1.innerText='Step Fight';
            title.appendChild(h1);

            this.node.appendChild(title);
            this.node.appendChild(this.signupForm.el);

            this.login = document.getElementById('r-login');
            this.password = document.getElementById('r-password');
            this.repeatPassword = document.getElementById('r-repeatpassword');

            this.loginHelp = document.getElementById('r-login-help');
            this.passwordHelp = document.getElementById('r-password-help');
            this.repeatPasswordHelp = document.getElementById('r-repeatpassword-help');

            this.btnSignUp = document.getElementById('btn-signup');

            this.btnToLogin = document.getElementById('btn-to-login');

            this.vkAuth = document.getElementById('vk-auth');

            this._initListener();
        }, 0);
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
        this.btnSignUp.hidden = true;
        this.vkAuth.hidden = true;
        let progressBar = new ProgressBar().getElemParent();
        this.btnSignUp.parentNode.insertBefore(progressBar, this.btnSignUp.nextSibling);
    }

    /**
     * Спрятать прогресс бар формы
     * @private
     */
    _hideProgressBar() {
        setTimeout(() => {
            this.btnSignUp.hidden = false;
            this.vkAuth.hidden = false;
            this.btnSignUp.parentNode.removeChild(this.btnSignUp.nextElementSibling);
        }, 0);
    }

    /**
     * Запуск слушателей
     * @private
     */
    _initListener() {
        //Submit form
        this.signupForm.el.addEventListener('submit', event => {
            event.preventDefault();

            if (this._checkFields()) {
                let body = this.signupForm.getFormData();
                this._showProgressBar();

                new UserService().signup(body).then(response => {
                    this.storage.user = response.user;
                    this._clearFields();
                    this._hideProgressBar();
                    IziToast.success({
                        title: 'Successfully registered',
                        position: 'topRight'
                    });
                    this.router.go(this.storage.urls.LOGIN);
                }).catch(err => {
                    CheckFields.fieldRemoveOk(this.login);
                    CheckFields.fieldSetErr(this.login);
                    if(err.result === 'no-conn'){
                        CheckFields.helpSetText(this.loginHelp, 'check connection');
                    } else {
                        CheckFields.helpSetText(this.loginHelp, 'login used');
                    }
                    this._hideProgressBar();
                    console.error(err);
                });
            }
        });
        this.btnToLogin.addEventListener('click', event=>{
            this._clearFields();
        });

        this.vkAuth.addEventListener('click', (event) => {
            event.preventDefault();
            VK.Auth.login(null, VK.access.FRIENDS);
        });

        VK.Observer.subscribe('auth.login', (response) => {
            //console.warn(response.session.user);
            //new UserService().signup({login: response.session.user.domain})
        });
    }

    /**
     * Проверка полей формы
     * @return {boolean}
     * @private
     */
    _checkFields() {
        let check = true;
        let prev = null;

        this.signupForm.fields.forEach(elem => {
            let result = elem.validate(prev);
            prev = elem;
            if (check === true) {
                check = result;
            }
        });

        return check;
    }

    /**
     * Отчистка полей формы
     * @private
     */
    _clearFields() {
        this.signupForm.fields.forEach(elem => {
            elem.clear();
        });
    }
}