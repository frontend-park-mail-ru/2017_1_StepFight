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
                        type: 'h2',
                        attrs: {
                            class: 'about-view__subtitle'
                        },
                        text: 'Game developed by:'
                    },
                    {
                        type: 'ul',
                        attrs: {class: 'about-view__name-list'},
                        elements: [
                            {
                                type:'li',
                                attrs: {id: 'egor'},
                                text: 'EGOR FOMICHEV'
                            },
                            {
                                type: 'li',
                                attrs: {id: 'rishat'},
                                text: 'RISHAT VALITOV'
                            },
                            {
                                type:'li',
                                attrs: {id: 'andrey'},
                                text: 'ANDREY CHERNOV'
                            },
                            {
                                type:'li',
                                attrs: {id: 'denis'},
                                text: 'DENIS STEPANOV'
                            }
                        ]
                    },
                    {
                        type: 'h2',
                        attrs: {
                            class: 'about-view__subtitle'
                        },
                        text: 'POWERED BY:'
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
        this._initListener();
    }

    _initListener(){
        let egor = document.getElementById('egor');
        let denis = document.getElementById('denis');
        let rishat = document.getElementById('rishat');
        let andrey = document.getElementById('andrey');
    }

}