/**
 * Created by Denis on 12.03.2017.
 */

export default class AnimModal{
    constructor(){

    }

    static show(elem){
        if(elem){
            elem.classList.remove('modal-hide');
            elem.classList.add('modal-show');
        }
    }

    static hide(elem){
        if(elem){
            elem.classList.remove('modal-show');
            elem.classList.add('modal-hide');
        }
    }
}