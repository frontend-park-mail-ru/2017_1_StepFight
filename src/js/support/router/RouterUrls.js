/**
 * Created by Denis on 24.03.2017.
 */
export default class RouterUrls{
    constructor(){
        window.MAIN = '/';
        window.LOGIN = '/login';
        window.SIGNUP = '/signup';
        window.LEADERBOARD = '/leaderboard';
        window.ABOUT = '/about';
        window.PROFILE = '/profile';

        window.SINGLEPLAYER = '/sgame';
        window.MULTIPLAYER = '/mgame';
        window.GAMERESULT = '/gameresult';

        window.SINGLEPLAYER_STRATEGY='SINGLEPLAYERSTRATEGY';
        window.MULTIPLAYER_STRATEGY='MULTIPLAYERSTRATEGY';

        window.STATEWAIT = 'STATEWAIT';
        window.STATEGAME = 'STATEGAME';
        window.STATERESULT = 'STATERESULT';
    }
}