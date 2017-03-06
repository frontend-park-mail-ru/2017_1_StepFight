/**
 * Created by Denis on 04.03.2017.
 */
'use strict';

(function () {
    let LeaderBoard = window.LeaderBoard;
    let UserService = window.UserService;

    new UserService().getLeaders().then(responce => {
        let leaderBoardContainer = document.getElementById('leaderboard-container');
        leaderBoardContainer.innerHTML = new LeaderBoard({
            titles: {
                title: 'Top players:',
            },
            leaderboard: responce.leaders
        }).render();
    }).catch(err => {
        console.log(err);
    });


    new UserService().getUser().then(response => {
        console.log('sdafgdsfg');
        let profileDiv = document.getElementById('profile');
        let profile = new Profile({
            data: {
                login: user.login,
                rating: user.rating,
                button: {
                    text: 'Log Out',
                    attrs: {
                        class: 'link',
                        id: 'btn-logout'
                    },
                    type: 'h3'
                },
                div: profileDiv
            }
        });
    }).catch(response => {
        console.log(response);
    });
})();