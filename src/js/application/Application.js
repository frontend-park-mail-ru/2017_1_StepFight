/**
 * Created by Denis on 04.03.2017.
 */
import Router from "../support/router/Router";
import MenuView from "../../views/menu-view/MenuView";
import LoginView from "../../views/enter-views/LoginView";
import SignUpView from "../../views/enter-views/SignUpView";
import LeaderBoardView from "../../views/leaderboard-view/LeaderBoardView";
import AboutView from "../../views/about-view/AboutView";
import ProfileView from "../../views/profile-view/ProfileView";
import GameView from "../../views/game-view/GameView";

import UserService from "../support/service/UserService";
import Storage from "../game/object/Storage";

import "./application.scss";
import "./main-title.scss";
import "../../../vendor/css/iziToast.min.css";
import MusicControls from "../../elements/music-controls/music-controls";

new UserService().getUser().then(user => {
    Storage.user = user;
    startRoute();
}).catch(err => {
    //console.log(err);
    startRoute();
});

new MusicControls().render();

function startRoute() {
    let router = new Router(window.document.documentElement);
    router.init({
        '/': {
            View: MenuView,
            el: document.getElementById('menu-view'),
        },
        '/login': {
            View: LoginView,
            el: document.getElementById('login-view')
        },
        '/signup': {
            View: SignUpView,
            el: document.getElementById('signup-view')
        },
        '/leaderboard': {
            View: LeaderBoardView,
            el: document.getElementById('leaderboard-view')
        },
        '/about': {
            View: AboutView,
            el: document.getElementById('about-view')
        },
        '/profile': {
            View: ProfileView,
            el: document.getElementById('profile-view')
        },
        '/game': {
            View: GameView,
            el: document.getElementById('game-view')
        }
    });

    router.start();
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../../sw/service-worker.js')
        .then(function (registration) {
            // при удачной регистрации имеем объект типа ServiceWorkerRegistration
            console.log('ServiceWorker registration', registration);
            // строкой ниже можно прекратить работу serviceWorker’а
            //registration.unregister();
        })
        .catch(function (err) {
            console.error(err);
        });
}



