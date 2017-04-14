/**
 * Created by Denis on 17.03.2017.
 */
import BaseView from '../BaseView';
import GameManager from "../../js/game/modules/GameManager";
import SinglePlayerStrategy from "../../js/game/modules/strategies/Singleplayer";

export default class GameView extends BaseView{
    constructor(node, storage, router){
        super(node);
        this.node = node;
        this.storage = storage;
        this.router = router;

    }

    render(){
        new GameManager(this.storage, this, this.storage.gameStates.SINGLEPLAYER_STRATEGY);
    }
}