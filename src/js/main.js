/**
 * Created by Denis on 04.03.2017.
 */
'use strict';

(function () {
    let LeaderBoard = window.LeaderBoard;

    let leaderBoardContainer = document.getElementById('leaderboard-container');
    leaderBoardContainer.innerHTML = new LeaderBoard({
        titles: {
            title: 'Top players:',
        },
        rating: [
            {title: 'dondiego1', score: 12},
            {title: 'dondiego2', score: 123},
            {title: 'dondiego3', score: 4512},
            {title: 'dondiego4', score: 123},
            {title: 'dondiego5', score: 123},
            {title: 'dondiego6', score: 1234},
            {title: 'dondiego6', score: 1234},
            {title: 'dondiego6', score: 1234},
            {title: 'dondiego6', score: 1234},
            {title: 'dondiego6', score: 1234},
            {title: 'dondiego6', score: 1234}
        ]
    }).render();
})();