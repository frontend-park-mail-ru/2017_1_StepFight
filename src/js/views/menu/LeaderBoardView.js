/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from '../BaseView';
import LeaderBoard from "../../menu/templates/LeaderBoard";
export default class LeaderBoardView extends BaseView{
    constructor(node){
        super(node);
        this.node = node;
        new LeaderBoard(node).refreshLeaderBoard();
    }
}