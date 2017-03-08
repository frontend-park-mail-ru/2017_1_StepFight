/**
 * Created by Denis on 05.03.2017.
 */
export default class Http {
    constructor() {
        if (Http.instance) {
            return Http.instance;
        }

        //this._baseUrl = 'http://localhost:8080/api';
        this._baseUrl = 'http://https://tp-server-java.herokuapp.com/api';

        Http.instance = this;
    }

    get BaseUrl() {
        return this._baseUrl;
    }

    set BaseUrl(value) {
        this._baseUrl = value;
    }

    get(address = '', headers = {}) {
        return new Promise(function (resolve, reject) {
            fetch(address, {
                method: 'GET',
                mode: 'cors',
                headers: headers,
                credentials: 'include'
            }).then(response => {
                return response.json();
            }).then(json => {
                resolve(json);
            }).catch(err => {
                reject({});
                console.error(err || err.statusText);
            });
        });
    }

    post(address = '', headers = {}, body = {}) {
        return new Promise(function (resolve, reject) {
            fetch(address, {
                method: 'POST',
                mode: 'cors',
                headers: headers,
                credentials: 'include',
                body: JSON.stringify(body)
            }).then(response => {
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
