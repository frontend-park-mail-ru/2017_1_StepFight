/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from '../baseView';
import SignUpForm from "../../menu/forms/signup";
export default class SignUpView extends BaseView{
    constructor(node){
        super(node);
        this.node = node;
        new SignUpForm(node);
    }
}