/**
 * Created by Denis on 19.03.2017.
 */
import BaseView from '../BaseView';
import RouterUrls from "../../support/router/RouterUrls";
export default class MenuView extends BaseView {
    constructor(node) {
        super(node);
        this.node = node;
        this.render({
            elements: [
                {
                    type: 'a',
                    attrs: {
                        href: window.LEADERBOARD,
                        class: 'btn__play router'
                    },
                    element: {
                        type: 'h1',
                        text: 'LEADER BOARD'
                    }
                },
                {
                    type: 'a',
                    attrs: {
                        href: window.LOGIN,
                        class: 'btn__main-play router'
                    },
                    element: {
                        type: 'h1',
                        text: 'PLAY'
                    }
                },
                {
                    type: 'a',
                    attrs: {
                        href: window.ABOUT,
                        class: 'btn__play router'
                    },
                    element: {
                        type: 'h1',
                        text: 'ABOUT'
                    }
                }
            ]
        });

    }

    render(instr) {
        let elemArray = this._getElems(instr.elements);
        this._elemsAppendTo(elemArray, this.node);
    }

    _setAttrs(attrs, elem) {
        Object.keys(attrs).forEach(name => {
            elem.setAttribute(name, attrs[name]);
        });
    }

    _elemsAppendTo(array, elem) {
        array.forEach(item => {
            elem.appendChild(item);
        })
    }

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

}