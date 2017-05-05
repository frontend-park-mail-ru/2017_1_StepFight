/**
 * Created by Denis on 20.04.2017.
 */

import './game-result-table.scss';

export default class GameResultTable{
    constructor(node){
        this.node = node;
    }

    render(settings) {
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'game-result-table');
        this.node.appendChild(this.container);

        this._addData(settings);
    }

    _addData(settings) {
        console.log(settings);
        if(settings.me.win){
            this.titleResult = document.createElement('h1');
            this.titleResult.innerText = `You win :>`;
            this.container.appendChild(this.titleResult);
        } else {
            this.titleResult = document.createElement('h1');
            this.titleResult.innerText = `You lose :<`;
            this.container.appendChild(this.titleResult);
        }

        /*----------------my data-----------------*/
        this.myDataInfo = document.createElement('div');
        this.myDataInfo.setAttribute('class', 'game-result-table__my-info');
        this.container.appendChild(this.myDataInfo);

        let title = document.createElement('h1');
        title.innerText = `My results: `;
        this.myDataInfo.appendChild(title);

        let login = document.createElement('h2');
        login.innerText = `Login: ${settings.me.object.login}`;
        this.myDataInfo.appendChild(login);

        let rating = document.createElement('h2');
        rating.innerText = `Rating: ${settings.me.object.rating}`;
        this.myDataInfo.appendChild(rating);

        /*----------------opponent data-----------------*/
        this.opponentDataInfo = document.createElement('div');
        this.opponentDataInfo.setAttribute('class', 'game-result-table__opponent-info');
        this.container.appendChild(this.opponentDataInfo);

        title = document.createElement('h1');
        title.innerText = `Opponent results: `;
        this.opponentDataInfo.appendChild(title);

        login = document.createElement('h4');
        login.innerText = `Login: ${settings.opponent.object.login}`;
        this.opponentDataInfo.appendChild(login);

        rating = document.createElement('h4');
        rating.innerText = `Rating: ${settings.opponent.object.rating}`;
        this.opponentDataInfo.appendChild(rating);


        /*-------------add button--------------*/
        this.btnOk = document.createElement('div');
        this.btnOk.setAttribute('class', 'game-result-table__button');
        this.btnOk.innerText = 'Ok';
        this.opponentDataInfo.appendChild(this.btnOk);
    }

    initListener(callback){
        this.btnOk.addEventListener('click', (event)=>{
            callback();
        });
    }

    remove() {
        this.node.removeChild(this.container);
    }
}