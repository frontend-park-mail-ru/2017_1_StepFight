/**
 * Created by Denis on 23.04.2017.
 */
export default class WebSocket {
    constructor() {

    }

    open(url) {
        this.socket = new WebSocket("ws://javascript.ru/ws");
        return new Promise((resolve, reject) => {
            this.socket.onopen = () => {
                console.log("Соединение установлено.");
                resolve();
            };
            this.socket.onerror = (error) => {
                console.log("Ошибка " + error.message);
                reject();
            };
        });
    }


    send(data) {
        return new Promise((resolve, reject)=>{
            if (this.socket) {
                this.socket.send(JSON.stringify(data));
            }
            this.socket.onmessage = (event) =>{
                resolve(event.data);
                console.log("Получены данные " + event.data);
            };
        });
    }

    remove() {

    }
}