/**
 * Created by Denis on 19.03.2017.
 */

import './menu-view.scss';
import './__controls-block/menu-view__controls-block.scss';
import './__controls-block/__button/menu-view__controls-block__button.scss';

import BaseView from "../BaseView";
export default class MenuView extends BaseView {
    /**
     *
     * @param node - узел
     * @param storage - память
     * @param router - роутер
     */
    constructor(node, storage, router) {
        super(node);
        this.node = node;
        this.storage = storage;
        this.router = router;
    }

    /**
     * Отрисовка меню
     */
    render() {
        super.destroyView();

        const instr = {
            title: {
                type: 'a',
                attrs: {
                    href: this.storage.urls.MAIN,
                    class: 'main-title'
                },
                element: {
                    type: 'h1',
                    text: 'Step Fight'
                }
            },
            elements: [
                {
                    type: 'a',
                    attrs: {
                        href: this.storage.urls.LEADERBOARD,
                        class: 'menu-view__controls-block__button'
                    },
                    element: {
                        type: 'h1',
                        text: 'LEADER BOARD'
                    }
                },
                {
                    type: 'a',
                    attrs: {
                        href: this.storage.urls.LOGIN,
                        class: 'menu-view__controls-block__button_main'
                    },
                    element: {
                        type: 'h1',
                        text: 'PLAY'
                    }
                },
                {
                    type: 'a',
                    attrs: {
                        href: this.storage.urls.ABOUT,
                        class: 'menu-view__controls-block__button'
                    },
                    element: {
                        type: 'h1',
                        text: 'ABOUT'
                    }
                }
            ]
        };
        let title = this._getTitle(instr.title);
        this.node.appendChild(title);
        let elemArray = this._getElems(instr.elements);

        let controlsBlock = document.createElement('div');
        controlsBlock.setAttribute('class', 'menu-view__controls-block');
        this._elemsAppendTo(elemArray, controlsBlock);
        this.node.appendChild(controlsBlock);
    }

    /**
     * Установка массив атрибкутов
     * @param attrs
     * @param elem
     * @private
     */
    _setAttrs(attrs, elem) {
        Object.keys(attrs).forEach(name => {
            elem.setAttribute(name, attrs[name]);
        });
    }

    /**
     * Добавить массив элементов
     * @param array
     * @param elem
     * @private
     */
    _elemsAppendTo(array, elem) {
        array.forEach(item => {
            elem.appendChild(item);
        })
    }

    /**
     * Получить массив элементов
     * @param elements - инструкции по созданию
     * @private
     */
    _getElems(elements) {
        return elements.map(data => {
            let elem = document.createElement(data.type);
            this._setAttrs(data.attrs, elem);
            let textElem = document.createElement(data.element.type);
            textElem.textContent = data.element.text;
            elem.appendChild(textElem);
            return elem;
        });
    }

    /**
     *  Получить заголовок
     * @param data
     * @return {Element}
     * @private
     */
    _getTitle(data) {
        let elem = document.createElement(data.type);
        this._setAttrs(data.attrs, elem);
        let textElem = document.createElement(data.element.type);
        textElem.textContent = data.element.text;
        elem.appendChild(textElem);
        return elem;
    }

}