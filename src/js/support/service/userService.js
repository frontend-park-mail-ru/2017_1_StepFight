/**
 * Created by Denis on 05.03.2017.
 */
'use strict';
(function () {
    const Http = window.Http;

    class UserService {
        constructor() {
            this.http = new Http();
            this.url = this.http.BaseUrl;
        }

        getUser() {
            const address = `${this.url}/user/get`;
            this.http.get(address, null).then(response => {
                console.log(response);
            });
        }

        login(body){
            const address = `${this.url}/user/login`;
            let headers = {'Content-Type': 'application/json'};
            this.http.post(address, headers, body).then(response => {
                console.log(response);
            });
        }

        signup(body){
            const address = `${this.url}/user/signup`;
            let headers = {'Content-Type': 'application/json'};
            this.http.post(address, headers, body).then(response => {
                console.log(response);
            });
        }
    }

    window.UserService = UserService;
})();