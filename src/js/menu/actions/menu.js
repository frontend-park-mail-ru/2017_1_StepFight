/**
 * Created by Denis on 03.03.2017.
 */
'use strict';
(function () {
    let btnPlay = document.getElementById('btn-play');
    let btnAbout = document.getElementById('btn-about');
    let btnLeaderBoard = document.getElementById('btn-leaderboard');
    let btnModalClose = document.getElementById('modal-close');
    let currModal = null;

    let modalDiv = document.getElementById('modal');
    let modalLogin = document.getElementById('modal-login');
    let modalLeaderBoard = document.getElementById('modal-leaderboard');
    let modalAbout = document.getElementById('modal-about');

    let btnToSignUp = document.getElementById('btn-to-signup');
    let btnToLogIn = document.getElementById('btn-to-login');
    let divLogin = document.getElementById('div-login');
    let divSignUp = document.getElementById('div-signup');

    initMenuButtonsListeners();
    initLoginButtonsListeners();

    function initMenuButtonsListeners() {
        btnPlay.addEventListener('click', function () {
            showDiv(modalDiv);
            showDiv(modalLogin);
            setCurrModal(modalLogin);
        });

        btnAbout.addEventListener('click', function () {
            showDiv(modalDiv);
            showDiv(modalAbout);
            setCurrModal(modalAbout);
        });

        btnLeaderBoard.addEventListener('click', function () {
            showDiv(modalDiv);
            showDiv(modalLeaderBoard);
            setCurrModal(modalLeaderBoard);
        });
        btnModalClose.addEventListener('click', function () {
            hideDiv(modalDiv);
            hideCurrModal();
        });
    }

    function initLoginButtonsListeners() {
        btnToSignUp.addEventListener('click', function () {
            showDiv(divSignUp);
            hideDiv(divLogin);
        });

        btnToLogIn.addEventListener('click', function () {
            showDiv(divLogin);
            hideDiv(divSignUp);
        });
    }

    function hideDiv(div) {
        div.classList.add('hidden');
    }

    function showDiv(div) {
        div.classList.remove('hidden');
    }

    function setCurrModal(modal) {
        currModal = modal;
    }

    function hideCurrModal() {
        currModal.classList.add('hidden');
    }
})();