/**
 * Created by Denis on 03.03.2017.
 */
export default class MenuActions {
    constructor() {
        this.btnPlay = document.getElementById('btn-play');
        this.btnAbout = document.getElementById('btn-about');
        this.btnLeaderBoard = document.getElementById('btn-leaderboard');
        this.btnModalClose = document.getElementById('modal-close');
        this.currModal = null;

        this.modalDiv = document.getElementById('modal');
        this.modalLogin = document.getElementById('modal-login');
        this.modalLeaderBoard = document.getElementById('modal-leaderboard');
        this.modalAbout = document.getElementById('modal-about');

        this.btnToSignUp = document.getElementById('btn-to-signup');
        this.btnToLogIn = document.getElementById('btn-to-login');
        this.divLogin = document.getElementById('div-login');
        this.divSignUp = document.getElementById('div-signup');

        this.initMenuButtonsListeners();
        this.initLoginButtonsListeners();
    }

    initMenuButtonsListeners() {
        this.btnPlay.addEventListener('click', () => {
            this.showDiv(this.modalDiv);
            this.showDiv(this.modalLogin);
            this.setCurrModal(this.modalLogin);
        });

        this.btnAbout.addEventListener('click', () => {
            this.showDiv(this.modalDiv);
            this.showDiv(this.modalAbout);
            this.setCurrModal(this.modalAbout);
        });

        this.btnLeaderBoard.addEventListener('click', () => {
            this.showDiv(this.modalDiv);
            this.showDiv(this.modalLeaderBoard);
            this.setCurrModal(this.modalLeaderBoard);
        });
        this.btnModalClose.addEventListener('click', () => {
            this.hideDiv(this.modalDiv);
            this.hideCurrModal();
        });
    }

    initLoginButtonsListeners() {
        this.btnToSignUp.addEventListener('click', () => {
            this.showDiv(this.divSignUp);
            this.hideDiv(this.divLogin);
        });

        this.btnToLogIn.addEventListener('click', () => {
            this.showDiv(this.divLogin);
            this.hideDiv(this.divSignUp);
        });
    }

    hideDiv(div) {
        div.classList.add('hidden');
    }

    showDiv(div) {
        div.classList.remove('hidden');
    }

    setCurrModal(modal) {
        this.currModal = modal;
    }

    hideCurrModal() {
        this.currModal.classList.add('hidden');
    }
}