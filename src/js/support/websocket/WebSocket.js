/**
 * Created by Denis on 23.04.2017.
 */
export default class WebSocket {

    open(url) {
        this.socket = new WebSocket(url);
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

    initOnMessage(){
        return new Promise((resolve)=>{
            this.socket.onmessage = (event) =>{
                resolve(event.data);
            };
        });
    }

    sendData(data) {
        if (this.socket) {
            this.socket.send(JSON.stringify(data));
        }
    }

    remove() {

    }
}