/**
 * Created by Denis on 04.03.2017.
 */
import LeaderBoard from './menu/templates/leaderBoard';
import MenuAction from './menu/actions/menuActions';
import LoginForm from './menu/forms/login';
import SignUpForm from './menu/forms/signup';
import GetUser from './menu/actions/getUser';

new LoginForm();
new SignUpForm();
new LeaderBoard().refreshLeaderBoard();
new GetUser().get();
new MenuAction();


