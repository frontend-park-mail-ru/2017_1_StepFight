/**
 * Created by Denis on 04.03.2017.
 */
import Router from './support/router/router';

let router = new Router(window.document.documentElement);

window.onpopstate = function (event) {
    router._setCurrView(document.location.pathname);
};


