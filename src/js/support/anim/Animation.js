/**
 * Created by Denis on 12.03.2017.
 */

export default class Animation{
    constructor(){

    }

    show(elem){
        if(elem){
            elem.classList.remove('elem-hide');
            elem.classList.add('elem-show');
        }
    }

    hide(elem){
        if(elem){
            elem.classList.remove('elem-show');
            elem.classList.add('elem-hide');
        }
    }
}