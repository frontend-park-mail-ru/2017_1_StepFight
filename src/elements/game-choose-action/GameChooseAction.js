/**
 * Created by Denis on 18.04.2017.
 */

import IziToast from "izitoast";

export default class GameChooseAction {
    constructor(node) {
        this.node = node;
        this.action = null;
        this.buffAction = null;
    }

    /**
     * Метод отрисовки
     */
    render() {
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'game-choose-action hidden');
        this.node.appendChild(this.container);

        let contentContainer = document.createElement('div');
        contentContainer.setAttribute('class', 'game-choose-action__content');
        this.container.appendChild(contentContainer);

        this.btnClose = document.createElement('span');
        this.btnClose.setAttribute('class', 'game-choose-action__close-modal');
        this.btnClose.innerHTML = '&times;';
        contentContainer.appendChild(this.btnClose);

        let actionContainer = document.createElement('div');
        actionContainer.setAttribute('class', 'game-choose-action__container');

        /*----------action set---------*/
        let actionSet = document.createElement('div');
        actionSet.setAttribute('class', 'game-choose-action__container__action-set');
        this.btnActionChooseHit = document.createElement('div');
        this.btnActionChooseHit.setAttribute('class', 'game-choose-action__button_tabs game-choose-action__button_tabs_focused');
        this.btnActionChooseHit.innerText = 'Hit';
        actionSet.appendChild(this.btnActionChooseHit);
        this.btnActionChooseBlock = document.createElement('div');
        this.btnActionChooseBlock.setAttribute('class', 'game-choose-action__button_tabs');
        this.btnActionChooseBlock.innerText = 'Block';
        actionSet.appendChild(this.btnActionChooseBlock);
        contentContainer.appendChild(actionSet);

        /*-----------actions settings-----------*/
        this.actionHitSet = document.createElement('div');
        this.actionHitSet.setAttribute('class', 'game-choose-action__container__action-hit-set');
        this.actionBlockSet = document.createElement('div');
        this.actionBlockSet.setAttribute('class', 'game-choose-action__container__action-block-set hidden');
        contentContainer.appendChild(this.actionHitSet);
        contentContainer.appendChild(this.actionBlockSet);

        /*-------------fill actions sets--------------*/
        /*---fill block set----*/
        this.btnActionBlockHead = document.createElement('div');
        this.btnActionBlockHead.setAttribute('class', 'game-choose-action__button_choose');
        this.btnActionBlockHead.innerText = 'head';
        this.btnActionBlockBody = document.createElement('div');
        this.btnActionBlockBody.setAttribute('class', 'game-choose-action__button_choose');
        this.btnActionBlockBody.innerText = 'body';
        this.actionBlockSet.appendChild(this.btnActionBlockBody);
        this.actionBlockSet.appendChild(this.btnActionBlockHead);
        /*---fill hit set----*/
        let divThan = document.createElement('div');
        divThan.setAttribute('class', 'game-choose-action__container__action-hit-set__column');
        let divWhere = document.createElement('div');
        divWhere.setAttribute('class', 'game-choose-action__container__action-hit-set__column');
        this.actionHitSet.appendChild(divThan);
        this.actionHitSet.appendChild(divWhere);

        /*-----------method--------------*/
        let headText = document.createElement('h3');
        headText.innerText = 'Method';
        divThan.appendChild(headText);

        this.btnActionHitThanHead = document.createElement('div');
        this.btnActionHitThanHead.setAttribute('class', 'game-choose-action__button_choose');
        this.btnActionHitThanHead.innerText = 'Head';
        divThan.appendChild(this.btnActionHitThanHead);

        this.btnActionHitThanArm = document.createElement('div');
        this.btnActionHitThanArm.setAttribute('class', 'game-choose-action__button_choose');
        this.btnActionHitThanArm.innerText = 'Arm';
        divThan.appendChild(this.btnActionHitThanArm);

        this.btnActionHitThanLeg = document.createElement('div');
        this.btnActionHitThanLeg.setAttribute('class', 'game-choose-action__button_choose');
        this.btnActionHitThanLeg.innerText = 'Leg';
        divThan.appendChild(this.btnActionHitThanLeg);

        /*-----------target--------------*/
        headText = document.createElement('h3');
        headText.innerText = 'Target';
        divWhere.appendChild(headText);

        this.btnActionHitWhereHead = document.createElement('div');
        this.btnActionHitWhereHead.setAttribute('class', 'game-choose-action__button_choose');
        this.btnActionHitWhereHead.innerText = 'Head';
        divWhere.appendChild(this.btnActionHitWhereHead);

        this.btnActionHitWhereBody = document.createElement('div');
        this.btnActionHitWhereBody.setAttribute('class', 'game-choose-action__button_choose');
        this.btnActionHitWhereBody.innerText = 'Body';
        divWhere.appendChild(this.btnActionHitWhereBody);


        /*--------------btn choose--------------*/
        this.btnChoose = document.createElement('div');
        this.btnChoose.setAttribute('class', 'game-choose-action__button');
        this.btnChoose.innerText = 'Ok';
        contentContainer.appendChild(this.btnChoose);

        this._initActionSetsListeners();
    }

    /**
     * Установить состояние события, если оно открыто на редактирование
     * @param action
     */
    setStartAction(action) {
        this.action = action;
        this.buffAction = new Object({action: 'hit', method: null, target: null});
        if(action === null || typeof action === 'undefined'){
            this.showHitSet();
            return;
        }
        if (this.action.action === 'hit') {
            this.actionHitSet.classList.remove('hidden');
            this.actionBlockSet.classList.add('hidden');

            this.btnActionChooseHit.classList.add('game-choose-action__button_tabs_focused');
            this.btnActionChooseBlock.classList.remove('game-choose-action__button_tabs_focused');

            switch (this.action.method) {
                case 'head': {
                    this._setButtonActionFocus(this.btnActionHitThanHead);
                    break;
                }
                case 'arm': {
                    this._setButtonActionFocus(this.btnActionHitThanArm);
                    break;
                }
                case 'leg': {
                    this._setButtonActionFocus(this.btnActionHitThanLeg);
                    break;
                }
            }
            switch (this.action.target) {
                case 'head': {
                    this._setButtonActionFocus(this.btnActionHitWhereHead);
                    break;
                }
                case 'body': {
                    this._setButtonActionFocus(this.btnActionHitWhereBody);
                    break;
                }
            }
        } else if (this.action.action === 'block') {

            this.actionHitSet.classList.add('hidden');
            this.actionBlockSet.classList.remove('hidden');

            switch (this.action.method) {
                case 'body': {
                    this._setButtonActionFocus(this.btnActionBlockBody);
                    break;
                }
                case 'head': {
                    this._setButtonActionFocus(this.btnActionBlockHead);
                    break;
                }
            }
        }
    }


    /**
     * Показать панель блоков
     */
    showBlockSet(){
        this.actionHitSet.classList.add('hidden');
        this.actionBlockSet.classList.remove('hidden');

        this.btnActionChooseHit.classList.remove('game-choose-action__button_tabs_focused');
        this.btnActionChooseBlock.classList.add('game-choose-action__button_tabs_focused');
    }

    /**
     * Показать панель ударов
     */
    showHitSet(){
        this.actionBlockSet.classList.add('hidden');
        this.actionHitSet.classList.remove('hidden');

        this.btnActionChooseHit.classList.add('game-choose-action__button_tabs_focused');
        this.btnActionChooseBlock.classList.remove('game-choose-action__button_tabs_focused');
    }

    /**
     * Инициализация слушателей кнопок по выбору действий
     * @private
     */
    _initActionSetsListeners() {
        this.showBlockSetCallback = function () {
            this.showBlockSet();

            this.clearActionData();
            this._clearFocused();
            this.buffAction.action = 'block';
        };
        this.showHitSetCallback = function () {
            this.showHitSet();

            this.clearActionData();
            this._clearFocused();
            this.buffAction.action = 'hit';
        };

        this.btnActionChooseBlock.addEventListener('click', this.showBlockSetCallback.bind(this));
        this.btnActionChooseHit.addEventListener('click', this.showHitSetCallback.bind(this));

        this.chooseThanHitHead = function () {
            this.clearHitThanFocus();
            this.buffAction.method = 'head';
            this._setButtonActionFocus(this.btnActionHitThanHead);
        };
        this.chooseThanHitArm = function () {
            this.clearHitThanFocus();
            this.buffAction.method = 'arm';
            this._setButtonActionFocus(this.btnActionHitThanArm);
        };
        this.chooseThanHitLeg = function () {
            this.clearHitThanFocus();
            this.buffAction.method = 'leg';
            this._setButtonActionFocus(this.btnActionHitThanLeg);
        };
        this.chooseWhereHitHead = function () {
            this.clearHitWhereFocus();
            this.buffAction.target = 'head';
            this._setButtonActionFocus(this.btnActionHitWhereHead);
        };
        this.chooseWhereHitBody = function () {
            this.clearHitWhereFocus();
            this.buffAction.target = 'body';
            this._setButtonActionFocus(this.btnActionHitWhereBody);
        };

        this.btnActionHitThanHead.addEventListener('click', this.chooseThanHitHead.bind(this));
        this.btnActionHitThanArm.addEventListener('click', this.chooseThanHitArm.bind(this));
        this.btnActionHitThanLeg.addEventListener('click', this.chooseThanHitLeg.bind(this));
        this.btnActionHitWhereHead.addEventListener('click', this.chooseWhereHitHead.bind(this));
        this.btnActionHitWhereBody.addEventListener('click', this.chooseWhereHitBody.bind(this));

        this.chooseBlockHead = function () {
            this.clearBlockThanFocus();
            this.buffAction.method = 'head';
            this._setButtonActionFocus(this.btnActionBlockHead);
        };
        this.chooseBlockBody = function () {
            this.clearBlockThanFocus();
            this.buffAction.method = 'body';
            this._setButtonActionFocus(this.btnActionBlockBody);
        };

        this.btnActionBlockHead.addEventListener('click', this.chooseBlockHead.bind(this));
        this.btnActionBlockBody.addEventListener('click', this.chooseBlockBody.bind(this));
    }

    /**
     * Установать кнопке выбранное положение
     * @param elem
     * @private
     */
    _setButtonActionFocus(elem) {
        elem.classList.add('game-choose-action__button_choose_focused');
    }

    /**
     * Убрать фокусы со всех кнопок блока
     */
    clearBlockThanFocus() {
        this.btnActionBlockHead.classList.remove('game-choose-action__button_choose_focused');
        this.btnActionBlockBody.classList.remove('game-choose-action__button_choose_focused');
    }

    /**
     * Убрать фокусы со всех кнопок удара "чем"
     */
    clearHitThanFocus() {
        this.btnActionHitThanArm.classList.remove('game-choose-action__button_choose_focused');
        this.btnActionHitThanHead.classList.remove('game-choose-action__button_choose_focused');
        this.btnActionHitThanLeg.classList.remove('game-choose-action__button_choose_focused');
    }

    /**
     * Убрать фокусы со всех кнопок удара "куда"
     */
    clearHitWhereFocus() {
        this.btnActionHitWhereHead.classList.remove('game-choose-action__button_choose_focused');
        this.btnActionHitWhereBody.classList.remove('game-choose-action__button_choose_focused');
    }

    /**
     * Отчистить выбранное действие
     */
    clearActionData() {
        this.buffAction.action = 'hit';
        this.buffAction.method = null;
        this.buffAction.target = null;
    }

    /**
     * Показать элемент
     */
    show() {
        this.container.classList.remove('hidden');
    }

    /**
     * Спрятать элемент
     */
    hide() {
        this.container.classList.add('hidden');
    }

    /**
     * Убрать все фокусы с кнопок
     * @private
     */
    _clearFocused() {
        //this.clearActionData();
        this.clearHitWhereFocus();
        this.clearHitThanFocus();
        this.clearBlockThanFocus()
    }

    /**
     * Инициализация слушателей на кнопках [закрытие, подтверждение действия]
     * @param callback
     */
    initButtonsAction(callback) {
        this.actionCallbackClose = function () {
            this.hide();
            this.deleteButtonAction();
            this._clearFocused();
            callback(null);
        };

        this.actionCallbackChoose = function () {
            switch (this.buffAction.action) {
                case 'hit': {
                    if (this.buffAction.method === null || this.buffAction.target === null) {
                        IziToast.error({
                            title: 'Fill actions',
                            position: 'topRight'
                        });
                    } else {
                        this.hide();
                        this.deleteButtonAction();


                        callback({
                            action: this.buffAction.action,
                            method: this.buffAction.method,
                            target: this.buffAction.target
                        });

                        this._clearFocused();
                    }
                    break;
                }
                case 'block': {
                    if (this.buffAction.method === null) {
                        IziToast.error({
                            title: 'Fill actions',
                            position: 'topRight'
                        });
                    } else {
                        this.hide();
                        this.deleteButtonAction();
                        callback({
                            action: this.buffAction.action,
                            method: this.buffAction.method,
                            target: this.buffAction.target
                        });
                        this._clearFocused();
                    }
                    break;
                }
                default: {
                    console.error('action is null');
                }
            }
        };

        this.btnClose.addEventListener('click', this.actionCallbackClose.bind(this));
        this.btnChoose.addEventListener('click', this.actionCallbackChoose.bind(this));
    }

    /**
     * Удалить слушатели
     */
    deleteButtonAction() {
        this.btnClose.removeEventListener('click', this.actionCallbackClose);
        this.btnChoose.removeEventListener('click', this.actionCallbackChoose);

        this.btnActionChooseBlock.removeEventListener('click', this.showBlockSetCallback);
        this.btnActionChooseHit.removeEventListener('click', this.showHitSetCallback);

        this.btnActionHitThanHead.removeEventListener('click', this.chooseThanHitHead);
        this.btnActionHitThanArm.removeEventListener('click', this.chooseThanHitArm);
        this.btnActionHitThanLeg.removeEventListener('click', this.chooseThanHitLeg);
        this.btnActionHitWhereHead.removeEventListener('click', this.chooseWhereHitHead);
        this.btnActionHitWhereBody.removeEventListener('click', this.chooseWhereHitBody);
    }
}