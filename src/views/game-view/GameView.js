/**
 * Created by Denis on 17.03.2017.
 */
import BaseView from '../BaseView';
import GameManager from "../../js/game/modules/GameManager";

import './game-view.scss';
import './__container/game-view__container.scss';
import './__game-area/game-view__game-area.scss';
export default class GameView extends BaseView{
    constructor(node, storage, router){
        super(node);
        this.node = node;
        this.storage = storage;
        this.router = router;

    }

    /**
     * Отрисовка view
     */
    render(strategy){
        if(typeof strategy === 'undefined') strategy = this.storage.gameStates.SINGLEPLAYER_STRATEGY;

        this.gameManager = new GameManager(this.router, this.storage, this, strategy);
        //this.gameManager.startMpGameProcess();
    }

    destroyView(){
        this.gameManager.closeWebSocket();
        super.destroyView();
    }
}