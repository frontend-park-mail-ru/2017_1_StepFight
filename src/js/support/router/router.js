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
        this.register('/', new MenuView(document.getElementById('menu-view')));
        this.register('/login', new LoginView(document.getElementById('login-view')));
        this.register('/signup', new SignUpView(document.getElementById('signup-view')));
        this.register('/leaderboard', new LeaderBoardView(document.getElementById('leaderboard-view')));
        this.register('/about', new AboutView(document.getElementById('about-view')));
        this.register('/profile', new ProfileView(document.getElementById('profile-view')));
        this.setCurrView(document.location.pathname);
        this.start();
    }

    setCurrView(href) {
        let newhref = this.checkUser(href);
        if (newhref) {
            href = newhref;
        }
        if (this.currView) {
            this.currView.toggleView();
            this.currView = this._getViewByRoute(href);
        } else {
            this.currView = this._getViewByRoute(href);
        }

        if (!this.currView) {
            return;
        }

        history.pushState({opa: 'opa'}, 'title1', href);
        this.currView.toggleView();
    }

    checkUser(href) {
        if (JSON.stringify(new User()) !== "{}" && ((href === '/login') || (href === '/signup'))) {
            return '/profile';
        }
        /*if (JSON.stringify(new User()) === "{}" && (href === '/profile')) {
            return '/login';
        }*/
        return null;
    }

    /**
     * Регистрация маршрута
     * @param {string} route
     * @param {Object} view
     */
    register(route, view) {
        this.routes[route] = view;
    }

    _getViewByRoute(href) {
        return this.routes[href];
    }

    /**
     * Запустить процес маршрутизации
     */
    start() {
        let self = this;
        document.querySelectorAll('.router').forEach(elem => {
            elem.addEventListener('click', function () {
                event.preventDefault();
                self.setCurrView(this.getAttribute('href'));
            });
        });
    }


    /**
     * Не перейти по маршруту
     * @param {string} path
     */
    go(path) {

    }
}
