
/**
 * Created by Denis on 08.03.2017.
 */
import UserService from '../../support/service/userService';
import Profile from '../elements/profile';
import User from '../../game/user';
export default class GetUser {
    constructor() {

    }

    get() {
        new UserService().getUser().then(user => {
            this._render(user);
            new User().obj = user;
        }, response => {

        }).catch(err => {

        });
    }

    _render(user) {
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
    }
}