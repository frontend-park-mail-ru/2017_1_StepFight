/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from "../BaseView";
import ProgressBar from "../../elements/loader/loader";
import UserService from "../../js/support/service/UserService";
export default class LeaderBoardView extends BaseView {
    constructor(node, storage, router) {
        super(node);
        this.node = node;
        this.storage = storage;
        this.router = router;
    }

    /**
     * Метод обновления leaderboard
     * @param data
     * @private
     */
    _refreshLeaderBoard(data) {
        let leaderBoardSource = `
                        {{#with logo}}
                            <a href="/" class="{{class}}"><h1>{{text}}</h1></a>
                        {{/with}}
                        {{#with title}}
                            <h2 class="{{class}}">{{text}}</h2>
                        {{/with}}
                        <p class="{{control.class}}" id="{{control.id}}">{{control.text}}</p>
                        {{#if leaderboard}}
                        <ul class="leaderboard-view__list">
                            {{#each leaderboard}}
                            <li class="leaderboard-view__list__item">{{login}}<span class="badge">{{rating}}</span>
                            <span class="position">{{position}}</span></li>
                            {{/each}}
                        </ul>
                        {{/if}}`;
        let leaderBoardTemplate = Handlebars.compile(leaderBoardSource);
        return leaderBoardTemplate(data);
    }

    /**
     * Отрисовка элемента
     */
    render() {
        this._setProgressBar(this.node);

        new UserService().getLeaders().then(response => {
            let arr = response.leaders;
            let iter = 1;
            arr.forEach(elem => {
                elem.position = `${iter}.`;
                iter++;
            });
            setTimeout(() => {
                this.node.innerHTML = this._refreshLeaderBoard({
                    logo: {
                        text: 'Step fight',
                        class: 'main-title'
                    },
                    title: {
                        text: 'Top players:',
                        class: 'leaderboard-view__title'
                    },
                    leaderboard: arr,
                    control: {
                        text: 'Refresh',
                        class: 'leaderboard-view__link',
                        id: 'refresh-lb'
                    }
                });
                this._initRefreshListener();
            }, 500);
        }).catch(err => {
            console.error(err);
            this.node.innerHTML = this._refreshLeaderBoard({
                titles: {
                    title: 'No connection',
                },
                err: {},
                control: {
                    text: 'Refresh',
                    class: 'leaderboard-view__link',
                    id: 'refresh-lb'
                }
            });
            this._initRefreshListener();
        });
    }

    /**
     * Инициализация слушателя на кнопку обновить
     * @private
     */
    _initRefreshListener() {
        let refresh = document.getElementById('refresh-lb');
        if (refresh) {
            refresh.addEventListener('click', () => {
                this.render();
            });
        }
    }

    /**
     * Отчитска контейнера, удаление всех дочерних элементов
     * @param container
     * @private
     */
    _clearContainer(container) {
        while (container.children.length > 1) {
            container.removeChild(container.lastChild);
        }
    }

    /**
     * Вставить прогресс бар
     * @param container
     * @private
     */
    _setProgressBar(container) {
        this._clearContainer(container);
        container.appendChild(new ProgressBar().getElem());
    }
}