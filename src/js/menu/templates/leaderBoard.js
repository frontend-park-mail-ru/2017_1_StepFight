/**
 * Created by Denis on 04.03.2017.
 */

import UserService from '../../support/service/userService'
export default class LeaderBoard {
    constructor() {

    }

    compare(obj1, obj2) {
        return obj2.rating - obj1.rating;
    }

    render(data) {
        data.leaderboard.sort(this.compare);
        let leaderBoardSource = `
                        {{#with titles}}
                            <h2>{{title}}</h2>
                        {{/with}}
                        <ul class="list-group">
                            {{#each leaderboard}}
                            <li class="list-group-item">{{login}}<span class="badge">{{rating}}</span></li>
                            {{/each}}
                        </ul>`;
        let leaderBoardTemplate = Handlebars.compile(leaderBoardSource);
        return leaderBoardTemplate(data);
    }

    refreshLeaderBoard(response) {
        let leaderBoardContainer = document.getElementById('leaderboard-container');
        if (leaderBoardContainer.children[0]) {
            leaderBoardContainer.removeChild(leaderBoardContainer.children[0]);
        }
        new UserService().getLeaders().then(responce => {
            let leaderBoardContainer = document.getElementById('leaderboard-container');
            leaderBoardContainer.removeChild(leaderBoardContainer.children[0]);
            leaderBoardContainer.innerHTML = this.render({
                titles: {
                    title: 'Top players:',
                },
                leaderboard: response.leaders
            });
        }).catch(err => {
            console.log(err);
        });
    }
}

