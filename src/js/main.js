/**
 * Created by Denis on 04.03.2017.
 */
import 'whatwg-fetch';
import LeaderBoard from './menu/templates/leaderBoard';
import MenuAction from './menu/actions/menuActions';
import LoginForm from './menu/forms/login';
import SignupForm from './menu/forms/signup';
import UserService from './support/service/userService';

new LoginForm();
new SignupForm();
new MenuAction();
new LeaderBoard().refreshLeaderBoard();

/*
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
 });*/