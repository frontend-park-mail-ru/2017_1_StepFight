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
    }

    init() {
        this._register('/', new MenuView(document.getElementById('menu-view')));
        this._register('/game', new GameView(document.getElementById('game-view')));
        this._register('/login', new LoginView(document.getElementById('login-view'), this));
        this._register('/signup', new SignUpView(document.getElementById('signup-view'), this));
        this._register('/leaderboard', new LeaderBoardView(document.getElementById('leaderboard-view')));
        this._register('/about', new AboutView(document.getElementById('about-view')));
        this._register('/profile', new ProfileView(document.getElementById('profile-view'), this));
        this._setCurrView(document.location.pathname);
        this._start();
    }

    _setCurrView(path) {
        this._checkUser(path);
    }

    _checkUser(path) {
        if (path === '/login' || path === '/signup') {
            this._getUser().then(user => {
                new User().obj = user;
                this._go('/profile');
            }).catch(err => {
                this._go(path);
            });
        } else if (path === '/profile') {
            this._getUser().then(user => {
                new User().obj = user;
                this._go(path);
            }).catch(err => {
                this._go('/login');
            });
        } else /*if (path === '/' || path === '/leaderboard' || path === '/about')*/ {
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

        let timeOut = 0;
        if (this.currView) {
            new Animation().hide(this.currView.node);
            timeOut = 600;
        }

        setTimeout(() => {
            if (this.currView) {
                this.currView.toggleView();
            }
            this.currView = this._getViewByRoute(path);

            if (!this.currView) {
                path = '/';
                this.currView = this._getViewByRoute(path);
                return;
            }

            if (path === '/profile') {
                this.currView.refresh();
            }

            history.pushState({opa: 'opa'}, 'title1', path);
            new Animation().show(this.currView.node);
            this.currView.toggleView();
        }, timeOut);
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
        /*let self = this;
         document.querySelectorAll('.router').forEach(elem => {
         elem.addEventListener('click', function () {
         event.preventDefault();
         console.log(this.getAttribute('href'));
         self._setCurrView(this.getAttribute('href'));
         });
         });*/
        this.node.addEventListener('click', event => this._onRouteChange(event));
    }

    _onRouteChange(event) {

        console.log(event.target);

        if (event.target instanceof HTMLAnchorElement) {
            event.preventDefault();
            this._setCurrView(event.target.getAttribute('href'));
        } else if (event.target.parentElement instanceof HTMLAnchorElement) {
            event.preventDefault();
            this._setCurrView(event.target.parentElement.getAttribute('href'));
        }

        // this._setCurrView(event.target.getAttribute('href'));

        /* if (this._setCurrView(event.target.getAttribute('href'))) {
         event.preventDefault();
         }*/

    }
}
