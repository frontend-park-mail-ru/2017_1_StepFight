/**
 * Created by Denis on 17.03.2017.
 */

import Storage from "../../game/object/Storage";
export default class Router {

    /**
     * Конструктор
     * @param node - область действия
     */
    constructor(node) {
        this.node = node;
        this.routes = {};
        this.currView = null;

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
        path = this._checkUser(path);
        if (isToHistory) {
            window.history.pushState({}, '', path);
        }
        if (this.currView) {
            this.currView.destroyView();
        }
        this.currView = this.getViewByRoute(path);

        if (!this.currView) {
            return;
        }
        if ('render' in this.currView) {
            if(gameStrategy !== null && typeof gameStrategy !== 'undefined'){
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
    cansel() {
        this.node.removeEventListener('click', event => this._onRouteChange(event))
    }

    /**
     * Проверка на смененный маршрут
     * @param event
     * @private
     */
    _onRouteChange(event) {
        if (event.target instanceof HTMLAnchorElement) {
            event.preventDefault();
            this.go(event.target.getAttribute('href'), true);
        } else if (event.target.parentElement instanceof HTMLAnchorElement) {
            event.preventDefault();
            this.go(event.target.parentElement.getAttribute('href'), true);
        }
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
            //!!! for debug only !!!
            //return Storage.urls.GAME;
            if (Storage.user) {
                return Storage.urls.GAME;
            } else {
                return Storage.urls.MAIN;
            }
        } else {
            return path;
        }
    }
}
