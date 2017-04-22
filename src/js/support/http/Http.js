/**
 * Created by Denis on 05.03.2017.
 */

export default class Http {
    constructor() {
        if (Http.instance) {
            return Http.instance;
        }

        //this._baseUrl = 'http://localhost:8000/api';
        this._baseUrl = 'https://tp-server-java.herokuapp.com/api';

        Http.instance = this;
    }

    get BaseUrl() {
        return this._baseUrl;
    }

    set BaseUrl(value) {
        this._baseUrl = value;
    }

    request(address = '', headers = {}, type = 'GET', body = {}) {
        let fetchObj = {
            method: type,
            mode: 'cors',
            headers: headers,
            credentials: 'include'
        };
        if (body) {
            fetchObj.body = JSON.stringify(body);
        }

        return new Promise(function (resolve, reject) {
            fetch(address, fetchObj).then(response => {
                return response.json();
            }).then(json => {
                resolve(json);
            }).catch(err => {
                reject({});
                console.error(err || err.statusText);
            });
        });
    }
}
