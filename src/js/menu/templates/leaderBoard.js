/**
 * Created by Denis on 04.03.2017.
 */

import UserService from '../../support/service/userService';
import ProgressBar from '../elements/progressBar';
export default class LeaderBoard {
    constructor(node) {
        this.node = node;
    }

    _render(data) {
        let leaderBoardSource = `
                        {{#with titles}}
                            <h2>{{title}}</h2>
                        {{/with}}
                        <p class="{{control.class}}" id="{{control.id}}">{{control.text}}</p>
                        {{#if leaderboard}}
                        <ul class="list-group">
                            {{#each leaderboard}}
                            <li class="list-group-item">{{login}}<span class="badge">{{rating}}</span>
                            <span class="position">{{position}}</span></li>
                            {{/each}}
                        </ul>
                        {{/if}}`;
        let leaderBoardTemplate = Handlebars.compile(leaderBoardSource);
        return leaderBoardTemplate(data);
    }

    refreshLeaderBoard() {
        this._setProgressBar(this.node);

        new UserService().getLeaders().then(response => {
            let arr = response.leaders;
            let iter = 1;
            arr.forEach(elem=>{
               elem.position = `${iter}.`;
               iter++;
            });
            setTimeout(() => {
                this.node.innerHTML = this._render({
                    titles: {
                        title: 'Top players:',
                    },
                    leaderboard: arr,
                    control: {
                        text: 'Refresh',
                        class: 'link__refresh',
                        id: 'refresh-lb'
                    }
                });
                this._initRefreshListener();
            }, 500);
        }).catch(err => {
            console.error(err);
            this.node.innerHTML = this._render({
                titles: {
                    title: 'No connection',
                },
                err: {},
                control: {
                    text: 'Refresh',
                    class: 'link',
                    id: 'refresh-lb'
                }
            });
            this._initRefreshListener();
        });
    }

    _initRefreshListener() {
        let refresh = document.getElementById('refresh-lb');
        if (refresh) {
            refresh.addEventListener('click', () => {
                this.refreshLeaderBoard();
            });
        }
    }

    _clearContainer(container) {
        while (container.children.length > 1) {
            container.removeChild(container.lastChild);
        }
    }

    _setProgressBar(container) {
        this._clearContainer(container);
        container.appendChild(new ProgressBar().getElem());
    }
}

