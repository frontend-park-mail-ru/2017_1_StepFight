/**
 * Created by Denis on 17.03.2017.
 */

import Storage from "../../game/object/Storage";
import IziToast from "izitoast";
export default class Router {

    /**
     * Конструктор
     * @param node - область действия
     */
    constructor(node) {
        this.node = node;
        this.routes = {};
        this.currView = null;

        window.onbeforeunload = function(e) {
            if(document.location.pathname === "/game"){
                let dialogText = 'Dialog text here';
                e.returnValue = dialogText;
                return dialogText;
            }
        };

        window.onpopstate = (event) => {
            this.go(document.location.pathname, false);
        };
    }

    /**
     * Инициализация всех вьюшек
     * @param config
     */
    init(config) {
        Object.keys(config).forEach(url => {
            const View = config[url].View;
            const el = config[url].el;
            if (el) {
                this.register(url, new View(el, Storage, this));
            }
        });

        this.go(document.location.pathname);
    }

    /**
     * Перейти по маршруту и поменять текущую вьюшку
     * @param {string} path
     * @param isToHistory
     * @param gameStrategy
     */
    go(path, isToHistory, gameStrategy) {
        path = this._checkOffline(path);
        if (isToHistory) {
            window.history.pushState({path: path}, '', path);
        }
        if (this.currView) {
            this.currView.destroyView();
        }
        this.currView = this.getViewByRoute(path);

        if (!this.currView) {
            return;
        }

        if ('render' in this.currView) {
            if (gameStrategy !== null && typeof gameStrategy !== 'undefined') {
                this.currView.render(gameStrategy);
            } else {
                this.currView.render();
            }
        }
    }

    /**
     * Регистрация маршрута
     * @param {string} route
     * @param {Object} view
     */
    register(route, view) {
        this.routes[route] = view;
    }

    /**
     * Получение маршрута
     * @param href
     * @return {*}
     */
    getViewByRoute(href) {
        return this.routes[href];
    }

    /**
     * Запустить процес маршрутизации
     */
    start() {
        this.node.addEventListener('click', event => this._onRouteChange(event));
    }

    /**
     * Остановить процес маршрутизации
     */
    cancel() {
        this.node.removeEventListener('click', this._onRouteChange(event))
    }

    /**
     * Проверка на смененный маршрут
     * @param event
     * @private
     */
    _onRouteChange(event) {
        if (event.target instanceof HTMLAnchorElement) {
            if (this._checkOnAbleLink(event.target.getAttribute('href')))
                return;
            event.preventDefault();
            this.go(event.target.getAttribute('href'), true);
        } else if (event.target.parentElement instanceof HTMLAnchorElement) {
            if (this._checkOnAbleLink(event.target.parentElement.getAttribute('href')))
                return;
            event.preventDefault();
            this.go(event.target.parentElement.getAttribute('href'), true);
        }
    }

    _checkOnAbleLink(link) {
        console.warn(link);
        let links = ['https://tech.yandex.ru/speechkit/cloud/', 'https://yandex.ru/'];
        for (let i = 0; i < links.length; i++) {
            if (links[i] === link) {
                return true;
            }
        }
        return false;
    }

    _checkOffline(path) {
        if (navigator.onLine) {
            path = this._checkUser(path);
            try {
                if (Storage.user.login === 'Offline') Storage.user.login = null;
            } catch (e) {
                //console.warn(e);
            }
        } else {
            IziToast.warning({
                title: 'Only test single play',
                message: 'YOU ARE OFFLINE!',
                position: 'topRight',
                timeout: 5000
            });
            Storage.user = {login: 'Offline', rating: 9999999999999999};
            path = (path === Storage.urls.LOGIN || path === Storage.urls.SIGNUP || path === Storage.urls.PROFILE)
                ? Storage.urls.GAME : path;
        }
        return path;
    }

    /**
     * Проверка, залогинен ли юзер
     * @param path
     * @private
     */
    _checkUser(path) {
        if (path === Storage.urls.LOGIN || path === Storage.urls.SIGNUP) {
            if (Storage.user) {
                return Storage.urls.PROFILE;
            } else {
                return path;
            }
        } else if (path === Storage.urls.PROFILE) {
            if (Storage.user) {
                return path;
            } else {
                return Storage.urls.LOGIN;
            }
        } else if (path === Storage.urls.GAME) {
            if (Storage.user) {
                return path;
            } else {
                return Storage.urls.MAIN;
            }
        } else {
            return path;
        }
    }
}
