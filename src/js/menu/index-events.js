'use strict';

/**
 * Created by Denis on 14.02.2017.
 */
$(document).ready(function () {
    let btn_start = document.getElementById('btn-start');
    let login_modal = document.getElementById('login-modal');
    let login_span = document.getElementById('login-modal-close-span');

    btn_start.addEventListener('click',function () {
        $(login_modal).removeClass('hidden');
    });
    login_span.addEventListener('click', function () {
        $(login_modal).addClass('hidden');
    });

    /*--------------*/

    let btn_leaderboard = document.getElementById('btn-leaderboard');
    let leaderboard_modal = document.getElementById('leaderboard-modal');
    let leaderboard_span = document.getElementById('leaderboard-modal-close-span');

    btn_leaderboard.addEventListener('click', function () {
        $(leaderboard_modal).removeClass('hidden');
    });
    leaderboard_span.addEventListener('click', function () {
        $(leaderboard_modal).addClass('hidden');
    });

    /*---------------*/
    let btn_about = document.getElementById('btn-about');
    let about_modal = document.getElementById('about-modal');
    let about_span = document.getElementById('about-modal-close-span');

    btn_about.addEventListener('click', function () {
        $(about_modal).removeClass('hidden');
    });
    about_span.addEventListener('click', function () {
        $(about_modal).addClass('hidden');
    });

    /*---------------*/
    let div_login = document.getElementById('div-login');
    let div_signup = document.getElementById('div-signup');
    let btn_to_login = document.getElementById('btn-to-login');
    let btn_to_signup = document.getElementById('btn-to-signup');

    btn_to_login.addEventListener('click', function (event) {
        $(div_signup).addClass('hidden');
        $(div_login).removeClass('hidden');
    });

    btn_to_signup.addEventListener('click', function (event) {
        $(div_login).addClass('hidden');
        $(div_signup).removeClass('hidden');
    });
});
