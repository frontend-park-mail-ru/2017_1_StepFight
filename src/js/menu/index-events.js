'use strict';

/**
 * Created by Denis on 14.02.2017.
 */
document.addEventListener('DOMContentLoaded', function () {
    let btn_play = document.getElementById('btn-play');
    let login_modal = document.getElementById('login-modal');
    let login_span = document.getElementById('login-modal-close-span');

    btn_play.addEventListener('click', function () {
        login_modal.classList.remove('hidden');
    });
    login_span.addEventListener('click', function () {
        login_modal.classList.add('hidden');
    });

    /*--------------*/

    let btn_leaderboard = document.getElementById('btn-leaderboard');
    let leaderboard_modal = document.getElementById('leaderboard-modal');
    let leaderboard_span = document.getElementById('leaderboard-modal-close-span');

    btn_leaderboard.addEventListener('click', function () {
        leaderboard_modal.classList.remove('hidden');
    });
    leaderboard_span.addEventListener('click', function () {
        leaderboard_modal.classList.add('hidden');
    });

    /*---------------*/
    let btn_about = document.getElementById('btn-about');
    let about_modal = document.getElementById('about-modal');
    let about_span = document.getElementById('about-modal-close-span');

    btn_about.addEventListener('click', function () {
        about_modal.classList.remove('hidden');
    });
    about_span.addEventListener('click', function () {
        about_modal.classList.add('hidden');
    });

    /*---------------*/
    let div_login = document.getElementById('div-login');
    let div_signup = document.getElementById('div-signup');
    let btn_to_login = document.getElementById('btn-to-login');
    let btn_to_signup = document.getElementById('btn-to-signup');

    btn_to_login.addEventListener('click', function (event) {
        div_signup.classList.add('hidden');
        div_login.classList.remove('hidden');
    });

    btn_to_signup.addEventListener('click', function (event) {
        div_signup.classList.remove('hidden');
        div_login.classList.add('hidden');
    });

    /*--------login-------*/
    let game_area = document.getElementById('game-area');
    let btn_login = document.getElementById('btn-login');
    let l_login = document.getElementById('l-login');
    let l_password = document.getElementById('l-password');
    let l_span_err = document.getElementById('l-span-err');
    btn_login.addEventListener('click', function (event) {
        let check = true;
        if (l_login.value !== 'dondiego') {
            l_login.classList.add('input__error');
            check = false;
        }
        if (l_password.value !== 'qweasd123') {
            l_password.classList.add('input__error');
            check = false;
        }
        if (check === true) {
            game_area.classList.remove('hidden');
            document.body.classList.add('game-body');
        } else {
            l_span_err.innerHTML = 'Wrong data';
            l_span_err.style.visibility = 'visible';
        }
    });
    l_login.addEventListener('keydown', function () {
        l_login.classList.remove('input__error');
        l_span_err.style.visibility = 'hidden';
    });
    l_password.addEventListener('keydown', function () {
        l_password.classList.remove('input__error');
        l_span_err.style.visibility = 'hidden';
    });

    /*--------signup-------*/
    let btn_signup = document.getElementById('btn-signup');

    let r_login_span_err = document.getElementById('r-login-span-err');
    let r_pass_span_err = document.getElementById('r-pass-span-err');
    let r_repeat_pass_span_err = document.getElementById('r-repeat-pass-span-err');

    let r_login = document.getElementById('r-login');
    let r_password = document.getElementById('r-password');
    let r_repeatpassword = document.getElementById('r-repeatpassword');

    btn_signup.addEventListener('click', function (event) {
        let check = true;
        if (r_login.value.match(/[а-яА-Я]+/) != null) {
            r_login.classList.add('input__error');
            r_login_span_err.innerHTML = 'Only Latin';
            r_login_span_err.style.visibility = 'visible';
            check = false;
        }

        if (r_password.value.length < 8) {
            r_password.classList.add('input__error');
            r_pass_span_err.innerHTML = '8 - is min length';
            r_pass_span_err.style.visibility = 'visible';
            check = false;
        }

        if (r_repeatpassword.value.length < 8) {
            r_repeatpassword.classList.add('input__error');
            r_repeat_pass_span_err.innerHTML = '8 - is min length';
            r_repeat_pass_span_err.style.visibility = 'visible';
            check = false;
        }

        if (r_password.value != r_repeatpassword.value) {
            r_password.classList.add('input__error');
            r_pass_span_err.innerHTML += ' Passwords not equals';
            r_pass_span_err.style.visibility = 'visible';
            check = false;
        }

        if (check === true) {
            window.alert('SUCCESS');
        } else {

        }
    });
    r_login.addEventListener('keydown', function () {
        r_login.classList.remove('input__error');
        r_login_span_err.style.visibility = 'hidden';
    });
    r_password.addEventListener('keydown', function () {
        r_password.classList.remove('input__error');
        r_pass_span_err.style.visibility = 'hidden';
    });
    r_repeatpassword.addEventListener('keydown', function () {
        r_repeatpassword.classList.remove('input__error');
        r_repeat_pass_span_err.style.visibility = 'hidden';
    });
});

