/**
 * Created by Denis on 06.03.2017.
 */

export default class User {
    constructor() {
        if (User.__instance) {
            return User.__instance;
        }
        User.__instance = this;
    }

    set obj(user) {
        this._user = user;
    }
}

