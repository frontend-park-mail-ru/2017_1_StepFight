/**
 * Created by Denis on 04.03.2017.
 */
import Router from "./support/router/Router";
import MenuView from "../views/menu-view/MenuView";
import LoginView from "../views/enter-views/LoginView";
import SignUpView from "../views/enter-views/SignUpView";
import LeaderBoardView from "../views/leaderboard-view/LeaderBoardView";
import AboutView from "../views/about-view/AboutView";
import ProfileView from "../views/profile-view/ProfileView";
import GameView from "../views/game-view/GameView";

import UserService from "./support/service/UserService";
import Storage from './game/object/Storage';

new UserService().getUser().then(user => {
    Storage.user = user;
    startRoute();
}).catch(err => {
    console.log(err);
    startRoute();
});


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




