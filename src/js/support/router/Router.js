/**
 * Created by Denis on 17.03.2017.
 */
import MenuView from "../../views/menu/MenuView";
import LoginView from "../../views/menu/LoginView";
import SignUpView from "../../views/menu/SignUpView";
import AboutView from "../../views/menu/AboutView";
import LeaderBoardView from "../../views/menu/LeaderBoardView";
import ProfileView from "../../views/menu/ProfileView";
import User from "../../game/object/User";
import UserService from "../service/UserService";
import GameView from "../../views/game/GameView";
import Animation from "../anim/Animation";
import RouterUrls from "./RouterUrls";
import GameManager from "../../game/modules/GameManager";


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
        this.init();
        window.onpopstate = (event) => {
            this._setCurrView(document.location.pathname, false);
        };
    }

    init() {
        window.router = this;
        let gameView = new GameView(document.getElementById('game-view'));
        this._register(window.MAIN, new MenuView(document.getElementById('menu-view')));
        this._register(window.SINGLEPLAYER, gameView);
        this._register(window.MULTIPLAYER, gameView);
        this._register(window.LOGIN, new LoginView(document.getElementById('login-view')));
        this._register(window.SIGNUP, new SignUpView(document.getElementById('signup-view')));
        this._register(window.LEADERBOARD, new LeaderBoardView(document.getElementById('leaderboard-view')));
        this._register(window.ABOUT, new AboutView(document.getElementById('about-view')));
        this._register(window.PROFILE, new ProfileView(document.getElementById('profile-view')));
        this._setCurrView(document.location.pathname);
        this._start();
    }

    _setCurrView(path, isToHistory) {
        if (isToHistory !== false) {
            history.pushState({opa: 'opa'}, 'title1', path);
        }
        this._checkUser(path);
    }

    _checkUser(path) {
        if (path === window.LOGIN || path === window.SIGNUP) {
            this._getUser().then(user => {
                //new User().obj = user;
                window.USER = user;
                this._go(window.PROFILE);
            }).catch(err => {
                this._go(path);
            });
        } else if (path === window.PROFILE) {
            this._getUser().then(user => {
                //new User().obj = user;
                window.USER = user;
                this._go(path);
            }).catch(err => {
                this._go(window.LOGIN);
            });
        } else if (path === window.SINGLEPLAYER) {
            this._getUser().then(user => {
                //new User().obj = user;
                window.USER = user;
                new GameManager(user, this.getViewByRoute(path), window.SINGLEPLAYER_STRATEGY);
                this._go(window.SINGLEPLAYER);
            }).catch(err => {
                console.error(err);
                this._go(window.LOGIN);
            });
        } else if (path === window.MULTIPLAYER) {
            this._getUser().then(user => {
                //new User().obj = user;
                window.USER = user;
                new GameManager(user, this.getViewByRoute(path), window.MULTIPLAYER_STRATEGY);
                this._go(window.MULTIPLAYER);
            }).catch(err => {
                this._go(window.LOGIN);
            });
        } else {
            this._go(path);
        }
    }

    _getUser() {
        return new Promise(function (resolve, reject) {
            /*let user = new User();
            if (user) {
                console.error(user);
                resolve(user);
            }*/
            if(window.USER){
                resolve(window.USER);
            }
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
        //console.log(this.currView.constructor.name);
        if(this.currView !== null && this.currView.constructor.name === GameView.name){
            this.currView.clear();
        }

        if (this.currView) {
            this.currView.toggleView();
        }
        this.currView = this.getViewByRoute(path);

        if (!this.currView) {
            /*path = window.MAIN;
             this.currView = this.getViewByRoute(path);*/
            return;
        }

        if (path === window.PROFILE) {
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

    getViewByRoute(href) {
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
