/**
 * Created by Denis on 06.03.2017.
 */
'use strict';
(function () {

    class User {
        constructor() {
            if (User.__instance) {
                return User.__instance;
            }
            this._user = {};
            User.__instance = this;
        }

        set ObjUser(user) {
            this._user = user;
        }

        get ObjUser() {
            return this._user;
        }
    }

    window.User = User;
})();