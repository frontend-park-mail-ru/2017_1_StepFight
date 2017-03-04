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
            return obj2.score - obj1.score;
        }

        render() {
            this.data.rating.sort(this.compare);
            let leaderBoardSource = `
                        {{#with titles}}
                            <h2>{{title}}</h2>
                        {{/with}}
                        <ul class="list-group">
                            {{#each rating}}
                            <li class="list-group-item">{{title}}<span class="badge">{{score}}</span></li>
                            {{/each}}
                        </ul>`;
            let leaderBoardTemplate = Handlebars.compile(leaderBoardSource);
            return leaderBoardTemplate(this.data);
        }
    }

    window.LeaderBoard = LeaderBoard;
})();