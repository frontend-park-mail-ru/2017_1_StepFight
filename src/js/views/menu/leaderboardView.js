/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from '../baseView';
import LeaderBoard from "../../menu/templates/leaderBoard";
export default class LeaderBoardView extends BaseView{
    constructor(node){
        super(node);
        this.node = node;
        new LeaderBoard(node).refreshLeaderBoard();
    }
}