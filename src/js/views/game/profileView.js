/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from '../baseView';
import UserService from '../../support/service/userService';
import User from '../../game/user';
import ProgressBar from "../../menu/elements/progressBar";

export default class ProfileView extends BaseView {
    constructor(node) {
        super(node);
        this.node = node;
        this.refreshProfile();
    }


    render(user) {
        let title = document.createElement('h2');
        title.innerHTML = 'Profile';
        let refresh = document.createElement('p');
        this._setAttrs({
            class: 'link router',
            href: '/profile'
        }, refresh);
        let list = document.createElement('ul');
        this._setAttrs({
            class: 'list-group'
        }, list);
        this._elemsAppendToList(user, list);

        this.removeProgressBar(this.node);
        this.node.appendChild(title);
        this.node.appendChild(refresh);
        this.node.appendChild(list);
    }

    _setAttrs(attrs, elem) {
        Object.keys(attrs).forEach(name => {
            elem.setAttribute(name, attrs[name]);
        });
    }

    _elemsAppendToList(array, elem) {
        Object.keys(array).forEach(name => {
            if (name !== 'id') {
                let li = document.createElement('li');
                li.setAttribute('class', 'list-group-item');
                li.textContent = name;
                let span = document.createElement('span');
                span.setAttribute('class', 'badge');
                span.textContent = array[name];
                li.appendChild(span);
                elem.appendChild(li);
            }
        });

    }

    refreshProfile() {
        this.setProgressBar(this.node);

        new UserService().getUser().then(user => {
            setTimeout(() => {
                this.render(user);
            }, 500);
            new User().obj = user;
        }).catch(err => {
            console.error(err);
            this.render({});
        });
    }

    // initRefreshListener() {
    //     let refresh = document.getElementById('refresh-lb');
    //     if (refresh) {
    //         refresh.addEventListener('click', () => {
    //             this.refreshLeaderBoard();
    //         });
    //     }
    // }

    _clearContainer(container) {
        while (container.children.length > 1) {
            container.removeChild(container.lastChild);
        }
    }

    setProgressBar(container) {
        this._clearContainer(container);
        container.appendChild(new ProgressBar().render());
    }

    removeProgressBar(container) {
        container.removeChild(container.firstElementChild);
    }
}