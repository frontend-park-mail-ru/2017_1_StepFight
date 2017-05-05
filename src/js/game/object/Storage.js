/**
 * Created by Denis on 06.03.2017.
 */

import RouterUrls from "../../support/router/RouterUrls";
import GameStates from "./GameStates";

class Storage {
    constructor(){
        this.urlsObj = new RouterUrls();
        this.gameStatesObj = new GameStates();
        this.objUser = null;
        Storage.__instance = this;
    }

    set user(user){
        this.objUser = user;
    }

    get user(){
        return this.objUser;
    }

    get urls(){
        return this.urlsObj;
    }

    get gameStates(){
        return this.gameStatesObj;
    }
}

const storage = new Storage();
export default storage;
