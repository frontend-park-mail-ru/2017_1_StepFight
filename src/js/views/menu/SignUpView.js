/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from '../BaseView';
import Form from "../../menu/elements/Form";
import ProgressBar from "../../menu/elements/ProgressBar";
import CheckFields from "../../menu/actions/CheckFields";
import IziToast from 'izitoast';
import UserService from "../../support/service/UserService";
import RouterUrls from "../../support/router/RouterUrls";

export default class SignUpView extends BaseView{
    constructor(node){
        super(node);
        this.node = node;
        this.router = window.router;
        this._showViewProgressBar();
        this._render();
    }

    /**
     * Отрисовка вьюшки
     * @private
     */
    _render() {
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
                            name: 'login',
                            valid: 'login'
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
                            name: 'password',
                            valid: 'password'
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
                            name: 'repeatpassword',
                            valid: 'repeatpassword'
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
                            class: 'link router',
                            id: 'btn-to-login',
                            href: window.LOGIN
                        },
                        type: 'a'
                    }
                ]
            }
        }).getElem();
        setTimeout(()=>{
            this._hideViewProgressBar();
            this.node.appendChild(this.signupForm.el);

            this.login = document.getElementById('r-login');
            this.password = document.getElementById('r-password');
            this.repeatPassword = document.getElementById('r-repeatpassword');

            this.loginHelp = document.getElementById('r-login-help');
            this.passwordHelp = document.getElementById('r-password-help');
            this.repeatPasswordHelp = document.getElementById('r-repeatpassword-help');

            this.btnSignUp = document.getElementById('btn-signup');

            this.btnToLogin = document.getElementById('btn-to-login');
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
        this.btnSignUp.hidden = true;
        let progressBar = new ProgressBar().getElem();
        this.btnSignUp.parentNode.insertBefore(progressBar, this.btnSignUp.nextSibling);
    }

    /**
     * Спрятать прогресс бар формы
     * @private
     */
    _hideProgressBar() {
        setTimeout(() => {
            this.btnSignUp.hidden = false;
            this.btnSignUp.parentNode.removeChild(this.btnSignUp.nextElementSibling);
        }, 500);
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
                    this._clearFields();
                    this._hideProgressBar();
                    IziToast.success({
                        title: 'Successfully registrated',
                        position: 'topRight'
                    });
                    this.router._setCurrView(window.LOGIN);
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
        })
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