/**
 * Created by Denis on 06.03.2017.
 */

export default class User {
    constructor() {
        if (User.__instance) {
            return User.__instance;
        }
        this._user = {};
        User.__instance = this;
    }

    set obj(user) {
        this._user = user;
    }

    get obj() {
        return this._user;
    }
}

