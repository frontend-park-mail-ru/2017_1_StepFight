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
                        type: 'img',
                        attrs: {
                            id: 'img-ept',
                        }
                    },
                    {
                        type: 'ul',
                        attrs: {class: 'about-view__name-list'},
                        elements: [
                            {
                                type: 'li',
                                attrs: {id: 'egor'},
                                text: 'EGOR FOMICHEV'
                            },
                            {
                                type: 'li',
                                attrs: {id: 'rishat'},
                                text: 'RISHAT VALITOV'
                            },
                            {
                                type: 'li',
                                attrs: {id: 'andrey'},
                                text: 'ANDREY CHERNOV'
                            },
                            {
                                type: 'li',
                                attrs: {id: 'denis'},
                                text: 'DENIS STEPANOV'
                            }
                        ]
                    },
                    /*{
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

                    }*/
                ]
            }

        ]
    }) {
        super.renderView();
        //super.destroyView();

        ElementCreator.create(config, this.node);
        this._initListener();
    }

    _initListener() {
        let imgept = document.getElementById('img-ept');
        let egor = document.getElementById('egor');
        egor.addEventListener('click', () => {
            imgept.setAttribute('src', '/src/img/egor.png');
        });
        let denis = document.getElementById('denis');
        denis.addEventListener('click', () => {
            imgept.setAttribute('src', 'http://justclickit.ru/flash/ufo/ufo%20(314).gif');
        });
        let rishat = document.getElementById('rishat');
        rishat.addEventListener('click', () => {
            imgept.setAttribute('src', 'http://justclickit.ru/flash/fear/fear%20(5).gif');
        });
        let andrey = document.getElementById('andrey');
        andrey.addEventListener('click', () => {
            imgept.setAttribute('src', 'http://justclickit.ru/flash/chert/chert%20(34).gif');
        });
    }

}