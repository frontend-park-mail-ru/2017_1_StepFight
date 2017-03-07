/**
 * Created by Denis on 07.03.2017.
 */

export default class LeaderBoard{
    constructor(){
        this.el = document.createElement('div');
    }

    render(){
        this.el.setAttribute('class', 'loader');
        return this.el;
    }
}