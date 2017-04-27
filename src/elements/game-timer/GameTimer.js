/**
 * Created by Denis on 27.04.2017.
 */
export default class GameTimer{
    constructor(){

    }

    start(){
        return new Promise((resolve) => {
            this.timeDown = new Date().getTime();
            this.timeDown = this.timeDown + 30000;

            this.inteval = setInterval(() => {
                let now = new Date().getTime();
                let distance = this.timeDown - now;

                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                console.warn(`00:${seconds}`);
                if(seconds === 0){
                    this.cancel();
                    resolve();
                }
            }, 1000);
        });
    }

    cancel(){
        clearInterval(this.inteval);
    }
}