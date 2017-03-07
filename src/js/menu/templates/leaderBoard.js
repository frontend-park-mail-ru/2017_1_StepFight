/**
 * Created by Denis on 04.03.2017.
 */

import UserService from '../../support/service/userService';
import ProgressBar from '../elements/progressBar';
export default class LeaderBoard {
    constructor() {

    }

    compare(obj1, obj2) {
        return obj2.rating - obj1.rating;
    }


    render(data) {
        let leaderBoardSource = `
                        {{#with titles}}
                            <h2>{{title}}</h2>
                        {{/with}}
                        <p class="{{control.class}}" id="{{control.id}}">{{control.text}}</p>
                        {{#if leaderboard}}
                        <ul class="list-group">
                            {{#each leaderboard}}
                            <li class="list-group-item">{{login}}<span class="badge">{{rating}}</span></li>
                            {{/each}}
                        </ul>
                        {{/if}}`;
        let leaderBoardTemplate = Handlebars.compile(leaderBoardSource);
        this.sleep(500);
        return leaderBoardTemplate(data);
    }

    sleep(ms) {
        ms += new Date().getTime();
        while (new Date() < ms) {
        }
    }

    refreshLeaderBoard() {
        let leaderBoardContainer = document.getElementById('leaderboard-container');
        this.setProgressBar(leaderBoardContainer);

        new UserService().getLeaders().then(responce => {
            let leaderBoardContainer = document.getElementById('leaderboard-container');
            let arr = responce.leaders;
            leaderBoardContainer.innerHTML = this.render({
                titles: {
                    title: 'Top players:',
                },
                leaderboard: arr,
                control: {
                    text: 'Refresh',
                    class: 'link',
                    id: 'refresh-lb'
                }
            });
            this.initRefreshListener();
        }, response => {
            leaderBoardContainer.innerHTML = this.render({
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
            this.initRefreshListener();
        }).catch(err => {
            console.error(err);
        });
    }

    initRefreshListener() {
        let refresh = document.getElementById('refresh-lb');
        if (refresh) {
            refresh.addEventListener('click', () => {
                this.refreshLeaderBoard();
            });
        }
    }

    clearContainer(container) {
        while (container.children.length > 1) {
            container.removeChild(container.lastChild);
        }
    }

    setProgressBar(container) {
        this.clearContainer(container);
        container.appendChild(new ProgressBar().render());
    }
}

