/**
 * Created by Denis on 04.03.2017.
 */
'use strict';

(function () {

    class LeaderBoard {
        constructor(data) {
            this.data = data;
        }

        compare(obj1, obj2) {
            return obj2.rating - obj1.rating;
        }

        render() {
            this.data.leaderboard.sort(this.compare);
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
            return leaderBoardTemplate(this.data);
        }
    }

    window.LeaderBoard = LeaderBoard;
})();