/**
 * Created by Denis on 25.05.2017.
 */
export default class ServiceWorker{
    constructor(){

    }

    init(){
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('../service-worker.js')
                .then(function (registration) {
                    // при удачной регистрации имеем объект типа ServiceWorkerRegistration
                    console.log('ServiceWorker registration', registration);
                    // строкой ниже можно прекратить работу serviceWorker’а
                    //registration.unregister();
                })
                .catch(function (err) {
                    console.error(err);
                });
        }
    }
}