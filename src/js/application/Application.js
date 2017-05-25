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
import ServiceWorker from "../../sw/ServiceWorker";

new UserService().getUser().then(user => {
    Storage.user = user;
    startRoute();
}).catch(err => {
    //console.log(err);
    startRoute();
});

loadYandexSpeech();
loadVk();

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

function loadVk() {
    let vkScript = document.createElement('script');
    vkScript.src = 'https://vk.com/js/api/openapi.js?146';
    document.body.appendChild(vkScript);

    vkScript.onload = () => {
        VK.init({
            apiId: 5915120
        });
    };
}

function loadYandexSpeech() {
    let speechScript = document.createElement('script');
    speechScript.src = 'https://webasr.yandex.net/jsapi/v1/webspeechkit.js';
    document.body.appendChild(speechScript);

    let speechSettingsScript = document.createElement('script');
    speechSettingsScript.src = 'https://webasr.yandex.net/jsapi/v1/webspeechkit-settings.js';
    document.body.appendChild(speechSettingsScript);

    speechSettingsScript.onload = () => {
        window.ya.speechkit.settings.lang = 'ru-RU';
        window.ya.speechkit.settings.apikey = '36e3d30b-c782-483b-9ffe-13f8a98f17ff';
    };
}

new ServiceWorker().init();



