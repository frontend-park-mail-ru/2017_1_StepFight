/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from '../baseView';
import UserService from '../../support/service/userService';
import User from '../../game/user';
import ProgressBar from "../../menu/elements/progressBar";
import Diamond from "../../menu/elements/diamond";
import RouterUrls from "../../support/router/routerUrls";

export default class ProfileView extends BaseView {
    constructor(node, router) {
        super(node);
        this.router = router;
        this.node = node;
        this.urls = new RouterUrls();
        //this.refreshProfile();
        this._showViewProgressBar();
        this._render();
    }


    _getUser() {
        return new Promise(function (resolve, reject) {
            new UserService().getUser().then(user => {
                new User().obj = user;
                resolve(user);
            }).catch(err => {
                reject({});
            });
        });
    }

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

    _initListener() {
        document.getElementById('btn-logout').addEventListener('click', event => {
            new UserService().logOutUser().then(response => {
                this.router._setCurrView(this.urls.LOGIN);
            }).catch(err => {

            });
        });
    }

    _showViewProgressBar() {
        let progressBar = new ProgressBar().getElem();
        this.node.appendChild(progressBar);
    }

    _hideViewProgressBar() {
        this.node.removeChild(this.node.lastChild);
    }

    _clearContainer() {
        while (this.node.children.length > 0) {
            this.node.removeChild(this.node.lastChild);
        }
    }

    refresh() {
        this._clearContainer();
        this._showViewProgressBar();
        this._render();
    }

    _createProfile(user) {
        let profile = document.createElement('div');
        profile.setAttribute('class', 'fcontainer-row');

        /* create controllers div*/
        let controllersDiv = document.createElement('div');
        controllersDiv.setAttribute('class', 'profile__container fcontainer-row');

        let hrefPlay = document.createElement('a');
        hrefPlay.setAttribute('href', this.urls.GAME);
        hrefPlay.setAttribute('class', 'router btn__profile');
        let h1 = document.createElement('h1');
        h1.innerHTML = 'Multiplayer';
        hrefPlay.appendChild(h1);

        let hrefPlay1 = document.createElement('a');
        hrefPlay1.setAttribute('href', this.urls.GAME);
        hrefPlay1.setAttribute('class', 'router btn__profile');
        h1 = document.createElement('h1');
        h1.innerHTML = 'Single play';
        hrefPlay1.appendChild(h1);

        let hrefLogout = document.createElement('a');
        hrefLogout.setAttribute('class', 'router link__logout');
        hrefLogout.setAttribute('id', 'btn-logout');
        hrefLogout.innerText = 'Log out';
        controllersDiv.appendChild(hrefPlay);
        controllersDiv.appendChild(hrefPlay1);
        controllersDiv.appendChild(hrefLogout);

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

        profile.appendChild(controllersDiv);
        profile.appendChild(userDiv);
        profile.appendChild(resourcesDiv);

        return profile;
    }
}