/**
 * Created by Denis on 17.03.2017.
 */
import BaseView from '../BaseView';

export default class GameView extends BaseView{
    constructor(node){
        super(node);
        this.router = window.router;
        this.node = node;
    }

    /**
     * Удаляем все элементы из вьюшки
     */
    clear(){
        while (this.node.firstChild) {
            this.node.removeChild(this.node.firstChild);
        }
    }
}