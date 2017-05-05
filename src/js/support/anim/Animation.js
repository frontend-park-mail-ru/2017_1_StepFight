/**
 * Created by Denis on 12.03.2017.
 */

export default class Animation{
    constructor(){

    }

    show(elem){
        if(elem){
            elem.classList.remove('elements-hide');
            elem.classList.add('elements-show');
        }
    }

    hide(elem){
        if(elem){
            elem.classList.remove('elements-show');
            elem.classList.add('elements-hide');
        }
    }
}