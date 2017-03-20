/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from '../baseView';
import LoginForm from "../../menu/forms/login";

export default class LoginView extends BaseView {
    constructor(node) {
        super(node);
        this.node = node;
        new LoginForm(node);
    }
}