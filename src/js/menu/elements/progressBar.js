/**
 * Created by Denis on 07.03.2017.
 */

export default class ProgressBar{
    constructor(){
        this.el = document.createElement('div');
    }

    render(){
        this.el.setAttribute('class', 'loader');
        return this.el;
    }

    static sleep(ms) {
        ms += new Date().getTime();
        while (new Date() < ms) {
        }
    }
}