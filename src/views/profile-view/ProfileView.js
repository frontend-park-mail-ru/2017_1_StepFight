/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from "../BaseView";
import UserService from "../../js/support/service/UserService";
import ProgressBar from "../../elements/loader/loader";
import Diamond from "../../js/menu/elements/Diamond";
import IziToast from "izitoast";

import "./profile-view.scss";
import "./__controllers/profile-view__controllers.scss";
import "./__controllers/__button/profile-view__controllers__button.scss";
import "./__resources/profile-view__resources.scss";
import "./__resources/__diamond/profile-view__resources__diamond.scss";
import "./__resources/__diamond/text/profile-view__resources__diamond__text.scss";
import "./__user-info/profile-view__user-info.scss";
import "./__user-info/login/profile-view__user-info__login.scss";
import "./__user-info/item/profile-view__user-info__item.scss";

export default class ProfileView extends BaseView {
    constructor(node, storage, router) {
        super(node);
        this.node = node;
        this.storage = storage;
        this.router = router;
    }

    /**
     * Получить юзера
     * @return {Promise}
     * @private
     */
    _getUser() {
        return new Promise((resolve, reject) => {
            if (this.storage.user === null) {
                new UserService().getUser().then(user => {
                    //window.USER = user;
                    resolve(user);
                }).catch(err => {
                    reject({});
                });
            } else {
                resolve(this.storage.user);
            }
        });
    }

    /**
     * Отрисовка профайла
     */
    render() {
        super.renderView();
        this._showViewProgressBar();
        this._getUser().then(user => {
            setTimeout(() => {
                this._hideViewProgressBar();
                this._renderProfile(user);
            }, 500);
        }).catch(err => {
            if (JSON.stringify(err) === '{}') {
                this.storage.user = null;
                this.router.go(this.storage.urls.LOGIN, true);
            }
            this._hideViewProgressBar();
        });
    }

    /**
     * Запуск слушателей
     * @private
     */
    _initListener() {
        this.hrefLogout.addEventListener('click', event => {
            new UserService().logOutUser().then(response => {
                this.storage.user = null;
                this.router.go(this.storage.urls.LOGIN, true);
            }).catch(err => {

            });
        });

        this.hrefPlayS.addEventListener('click', event => {
            this.router.go(this.storage.urls.GAME, true, this.storage.gameStates.SINGLEPLAYER_STRATEGY);
        });

        this.hrefPlayM.addEventListener('click', event => {
            //TODO check-connection
            if (navigator.onLine) {
                this.router.go(this.storage.urls.GAME, true, this.storage.gameStates.MULTIPLAYER_STRATEGY);
            } else {
                IziToast.error({
                    title: 'You are offline!',
                    text: 'Use single play only',
                    position: 'topRight'
                });
            }
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
     * @private
     */
    _renderProfile(user) {
        console.log(user);
        /* create main title */
        let title = document.createElement('a');
        title.setAttribute('href', this.storage.urls.MAIN);
        title.setAttribute('class', 'main-title');
        let textElem = document.createElement('h1');
        textElem.textContent = 'Step fight';
        title.appendChild(textElem);
        this.node.appendChild(title);


        /* create controllers div*/
        let controllersDiv = document.createElement('div');
        controllersDiv.setAttribute('class', 'profile-view__controllers');

        this.hrefPlayM = document.createElement('div');
        //this.hrefPlayM.setAttribute('href', this.storage.urls.GAME);
        this.hrefPlayM.setAttribute('class', 'profile-view__controllers__button');
        let h1 = document.createElement('h1');
        h1.innerHTML = 'Multiplayer';
        this.hrefPlayM.appendChild(h1);

        this.hrefPlayS = document.createElement('div');
        //this.hrefPlayS.setAttribute('href', this.storage.urls.GAME);
        this.hrefPlayS.setAttribute('class', 'profile-view__controllers__button');
        h1 = document.createElement('h1');
        h1.innerHTML = 'Single play';
        this.hrefPlayS.appendChild(h1);

        controllersDiv.appendChild(this.hrefPlayM);
        controllersDiv.appendChild(this.hrefPlayS);

        /*create user div*/
        let userDiv = document.createElement('div');
        userDiv.setAttribute('class', 'profile-view__user-info');

        let elem = document.createElement('h2');
        elem.setAttribute('class', 'profile-view__user-info__login');
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
            elem.setAttribute('class', 'profile-view__user-info__item');
            elem.innerText = `${el.name} ${el.value}`;
            userDiv.appendChild(elem);
        });

        /*create resources div*/
        let resourcesDiv = document.createElement('div');
        resourcesDiv.setAttribute('class', 'profile-view__resources');

        let arrCrystals = [
            {value: user.crystal_green, color: 'rgb(29, 140, 114)'},
            {value: user.crystal_blue, color: 'rgb(57, 108, 219)'},
            {value: user.crystal_red, color: 'rgb(138, 34, 76)'},
            {value: user.crystal_purple, color: 'rgb(80, 35, 153)'}];
        arrCrystals.forEach(params => {
            let div = document.createElement('div');
            div.setAttribute('class', 'profile-view__resources__diamond');

            let d = new Diamond(`${params.color}`).getElem().el;
            div.appendChild(d);

            elem = document.createElement('h3');
            elem.setAttribute('class', 'profile-view__resources__diamond__text');
            elem.innerText = `${params.value}`;
            div.appendChild(elem);
            resourcesDiv.appendChild(div);
        });

        this.node.appendChild(userDiv);
        this.node.appendChild(resourcesDiv);
        this.node.appendChild(controllersDiv);

        this.hrefLogout = document.createElement('div');
        this.hrefLogout.setAttribute('class', 'profile-view__controllers__button_logout');
        this.hrefLogout.setAttribute('id', 'btn-logout');
        this.hrefLogout.innerText = 'Log out';
        this.node.appendChild(this.hrefLogout);

        this._initListener();
    }
}