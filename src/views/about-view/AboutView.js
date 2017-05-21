/**
 * Created by Denis on 19.03.2017.
 */
import "./about-view.scss";

import BaseView from "../BaseView";
import ElementCreator from "../../js/support/element-creator/ElementCreator";
export default class AboutView extends BaseView {
    constructor(node, storage) {
        super(node);
        this.node = node;
        this.storage = storage;
    }

    render(config = {
        elements: [
            {
                type: 'a',
                attrs: {
                    href: this.storage.urls.MAIN,
                    class: 'main-title'
                },
                elements: [
                    {
                        type: 'h1',
                        text: 'Step fight'
                    }
                ]
            },
            {
                type: 'div',
                attrs: {
                    class: 'about-view'
                },
                elements: [
                    {
                        type: 'h1',
                        attrs: {
                            class: 'about-view__title'
                        },
                        text: 'ABOUT GAME'
                    },
                    {
                        type: 'a',
                        attrs: {
                            href: 'https://tech.yandex.ru/speechkit/cloud/',
                            target: '_blank'
                        },
                        text: 'Our game use "Yandex SpeechKit Cloud"'
                    },
                    {
                        type: 'a',
                        attrs: {
                            href: 'https://yandex.ru/',
                            target: '_blank'
                        },
                        elements: [
                            {
                                type: 'img',
                                attrs: {
                                    src: '/src/img/yandex_logo.png',
                                    width: '10%',
                                    height: '10%'
                                }
                            }
                        ]

                    }
                ]
            }

        ]
    }) {
        super.renderView();
        super.destroyView();

        ElementCreator.create(config, this.node);
    }
}