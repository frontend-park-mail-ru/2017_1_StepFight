/**
 * Created by Denis on 17.03.2017.
 */
import MenuView from "../../views/menu/menuView";
import LoginView from "../../views/menu/loginView";
import SignUpView from "../../views/menu/signupView";
import AboutView from "../../views/menu/aboutView";
import LeaderBoardView from "../../views/menu/leaderboardView";
import ProfileView from "../../views/game/profileView";
import User from "../../game/user";
import UserService from "../service/userService";
import GameView from "../../views/game/gameView";
import Animation from "../anim/animation";
import RouterUrls from "./routerUrls";


export default class Router {

    /**
     *
     * @constructor Route
     * @param {Node} node
     */
    constructor(node) {
        this.node = node;
        this.routes = {};
        this.currView = null;
        this.urls = new RouterUrls();
        this.init();
    }

    init() {
        this._register(this.urls.MAIN, new MenuView(document.getElementById('menu-view')));
        this._register(this.urls.GAME, new GameView(document.getElementById('game-view')));
        this._register(this.urls.LOGIN, new LoginView(document.getElementById('login-view'), this));
        this._register(this.urls.SIGNUP, new SignUpView(document.getElementById('signup-view'), this));
        this._register(this.urls.LEADERBOARD, new LeaderBoardView(document.getElementById('leaderboard-view')));
        this._register(this.urls.ABOUT, new AboutView(document.getElementById('about-view')));
        this._register(this.urls.PROFILE, new ProfileView(document.getElementById('profile-view'), this));
        this._setCurrView(document.location.pathname);
        this._start();
    }

    _setCurrView(path, isToHistory) {
        console.log(isToHistory);
        if (isToHistory !== false) {
            history.pushState({opa: 'opa'}, 'title1', path);
        }
        this._checkUser(path);
    }

    _checkUser(path) {
        if (path === this.urls.LOGIN || path === this.urls.SIGNUP) {
            this._getUser().then(user => {
                new User().obj = user;
                this._go(this.urls.PROFILE);
            }).catch(err => {
                this._go(path);
            });
        } else if (path === this.urls.PROFILE) {
            this._getUser().then(user => {
                new User().obj = user;
                this._go(path);
            }).catch(err => {
                this._go(this.urls.LOGIN);
            });
        } else {
            this._go(path);
        }
    }

    _getUser() {
        return new Promise(function (resolve, reject) {
            new UserService().getUser().then(user => {
                resolve(user);
            }).catch(err => {
                reject();
            });
        });
    }

    /**
     * Перейти по маршруту
     * @param {string} path
     */
    _go(path) {
        if (this.currView) {
            this.currView.toggleView();
        }
        this.currView = this._getViewByRoute(path);

        if (!this.currView) {
            path = this.urls.MAIN;
            this.currView = this._getViewByRoute(path);
            return;
        }

        if (path === this.urls.PROFILE) {
            this.currView.refresh();
        }

        this.currView.toggleView();
    }

    /**
     * Регистрация маршрута
     * @param {string} route
     * @param {Object} view
     */
    _register(route, view) {
        this.routes[route] = view;
    }

    _getViewByRoute(href) {
        return this.routes[href];
    }

    /**
     * Запустить процес маршрутизации
     */
    _start() {
        this.node.addEventListener('click', event => this._onRouteChange(event));
    }

    _onRouteChange(event) {
        if (event.target instanceof HTMLAnchorElement) {
            event.preventDefault();
            this._setCurrView(event.target.getAttribute('href'));
        } else if (event.target.parentElement instanceof HTMLAnchorElement) {
            event.preventDefault();
            this._setCurrView(event.target.parentElement.getAttribute('href'));
        }
    }
}
