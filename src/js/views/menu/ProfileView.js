/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from '../BaseView';
import UserService from '../../support/service/UserService';
import User from '../../game/object/User';
import ProgressBar from "../../menu/elements/ProgressBar";
import Diamond from "../../menu/elements/Diamond";
import RouterUrls from "../../support/router/RouterUrls";

export default class ProfileView extends BaseView {
    constructor(node) {
        super(node);
        this.router = window.router;
        this.node = node;
        //this.refreshProfile();
        this._showViewProgressBar();
        this._render();
    }

    /**
     * Получить юзера
     * @return {Promise}
     * @private
     */
    _getUser() {
        return new Promise(function (resolve, reject) {
            new UserService().getUser().then(user => {
                window.USER = user;
                resolve(user);
            }).catch(err => {
                reject({});
            });
        });
    }

    /**
     * Отрисовка профайла
     * @private
     */
    _render() {
        this._getUser().then(user => {
            this.profile = this._createProfile(user);

            setTimeout(() => {
                this._hideViewProgressBar();
                this.node.appendChild(this.profile);

                this.login = document.getElementById('l-login');
                this.password = document.getElementById('l-password');
                this.loginHelp = document.getElementById('l-login-help');
                this.btnLogin = document.getElementById('btn-login');

                this._initListener();
            }, 500);
        }).catch(err => {
            this._hideViewProgressBar();
        });
    }

    /**
     * Запуск слушателей
     * @private
     */
    _initListener() {
        document.getElementById('btn-logout').addEventListener('click', event => {
            new UserService().logOutUser().then(response => {
                this.router._setCurrView(window.LOGIN);
            }).catch(err => {

            });
        });
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
     * Отчистка контейнера
     * @private
     */
    _clearContainer() {
        while (this.node.children.length > 0) {
            this.node.removeChild(this.node.lastChild);
        }
    }

    /**
     * Обновить вьюшку
     */
    refresh() {
        this._clearContainer();
        this._showViewProgressBar();
        this._render();
    }

    /**
     * Создание элементов профайла
     * @param user
     * @return {Element}
     * @private
     */
    _createProfile(user) {
        let profile = document.createElement('div');
        profile.setAttribute('class', 'fcontainer-row');

        /* create controllers div*/
        let controllersDiv = document.createElement('div');
        controllersDiv.setAttribute('class', 'profile__container fcontainer-row');

        let hrefPlayM = document.createElement('a');
        hrefPlayM.setAttribute('href', window.MULTIPLAYER);
        hrefPlayM.setAttribute('class', 'router btn__profile');
        let h1 = document.createElement('h1');
        h1.innerHTML = 'Multiplayer';
        hrefPlayM.appendChild(h1);

        let hrefPlayS = document.createElement('a');
        hrefPlayS.setAttribute('href', window.SINGLEPLAYER);
        hrefPlayS.setAttribute('class', 'router btn__profile');
        h1 = document.createElement('h1');
        h1.innerHTML = 'Single play';
        hrefPlayS.appendChild(h1);

        controllersDiv.appendChild(hrefPlayM);
        controllersDiv.appendChild(hrefPlayS);

        /*create user div*/
        let userDiv = document.createElement('div');
        userDiv.setAttribute('class', 'fcontainer-column');

        let elem = document.createElement('h2');
        elem.setAttribute('class', 'text__profile-login');
        elem.innerText = `${user.login}`;
        userDiv.appendChild(elem);

        let arrValue = [
            {
                name: 'Rating:',
                value: user.rating
            },
            {
                name: 'Winnings:',
                value: user.game_count_win
            }, {
                name: 'Total matches: ',
                value: user.game_count
            }
        ];

        arrValue.forEach(el => {
            elem = document.createElement('h3');
            elem.setAttribute('class', 'text__profile-item');
            elem.innerText = `${el.name} ${el.value}`;
            userDiv.appendChild(elem);
        });

        /*create resources div*/
        let resourcesDiv = document.createElement('div');
        resourcesDiv.setAttribute('class', 'fcontainer-column');

        let arrCrystals = [
            {value: user.crystal_green, color: 'rgb(29, 140, 114)'},
            {value: user.crystal_blue, color: 'rgb(57, 108, 219)'},
            {value: user.crystal_red, color: 'rgb(138, 34, 76)'},
            {value: user.crystal_purple, color: 'rgb(80, 35, 153)'}];
        arrCrystals.forEach(params => {
            let div = document.createElement('div');
            div.setAttribute('class', 'fcontainer-row');

            let d = new Diamond(`${params.color}`).getElem().el;
            div.appendChild(d);

            elem = document.createElement('h3');
            elem.setAttribute('class', 'text__profile-diamond');
            elem.innerText = `${params.value}`;
            div.appendChild(elem);
            resourcesDiv.appendChild(div);
        });

        profile.appendChild(userDiv);
        profile.appendChild(resourcesDiv);
        profile.appendChild(controllersDiv);

        let hrefLogout = document.createElement('a');
        hrefLogout.setAttribute('class', 'router link__logout');
        hrefLogout.setAttribute('id', 'btn-logout');
        hrefLogout.innerText = 'Log out';
        profile.appendChild(hrefLogout);

        return profile;
    }
}