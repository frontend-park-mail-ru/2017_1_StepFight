/**
 * Created by Denis on 05.03.2017.
 */
import Http from '../http/http';
export default class UserService {
    constructor() {
        this.http = new Http();
        this.url = this.http.BaseUrl;
    }

    getUser() {
        const address = `${this.url}/user/get`;
        return new Promise((resolve, reject) => {
            this._createRequest(address, null, 'GET', null).then(response => {
                resolve(response.user);
            }).catch(e => {
                reject(e);
            });
        });
    }

    login(body) {
        const address = `${this.url}/user/login`;
        let headers = {'Content-Type': 'application/json'};
        return new Promise((resolve, reject) => {
            this._createRequest(address, headers, 'POST', body).then(response => {
                resolve(response.user);
            }).catch(e => {
                reject(e);
            });
        });
    }

    signup(body) {
        const address = `${this.url}/user/signup`;
        let headers = {'Content-Type': 'application/json'};
        return new Promise((resolve, reject) => {
            this._createRequest(address, headers, 'POST', body).then(response => {
                resolve({result: 'success'});
            }).catch(e => {
                if(!e){
                    reject({result: 'no-conn'});
                } else {
                    reject({result: 'error'});
                }
            });
        });
    }

    getLeaders() {
        const address = `${this.url}/user/leaders`;
        return new Promise((resolve, reject) => {
            this._createRequest(address, null, 'GET', null).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    logOutUser() {
        const address = `${this.url}/user/logout`;
        return new Promise((resolve, reject) => {
            this._createRequest(address, null, 'GET', null).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    _createRequest(address, headers = {}, type = 'GET', body = {}) {
        const http = this.http;
        return new Promise(function (resolve, reject) {
            http.request(address, headers, type, body).then(response => {
                if (response.status === '200 OK') {
                    resolve(response);
                } else {
                    console.log(response.status);
                    reject(response);
                }
            }).catch(e => {
                console.error(e.status);
                reject({});
            });
        });
    }
}
