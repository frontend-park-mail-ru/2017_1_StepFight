/**
 * Created by Denis on 18.04.2017.
 */

import IziToast from "izitoast";

import "./game-choose-action.scss";
import "./__button/game-choose-action__button.scss";
import "./__container/game-choose-action__container.scss";
import StepObject from "../../js/game/object/StepObject";

export default class GameChooseAction {
    constructor(node, manager) {
        this.node = node;
        this.manager = manager;
        this.action = new StepObject();
        this.buffAction = new StepObject();
    }

    /**
     * Метод отрисовки
     */
    render() {
        /*----------create main container-----------*/
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'game-choose-action hidden');
        this.node.appendChild(this.container);

        /*----------create content container-----------*/
        let contentContainer = document.createElement('div');
        contentContainer.setAttribute('class', 'game-choose-action__content');
        this.container.appendChild(contentContainer);

        /*----------create close button-----------*/
        this.buttonClose = document.createElement('span');
        this.buttonClose.setAttribute('class', 'game-choose-action__close-modal');
        this.buttonClose.innerHTML = '&times;';
        contentContainer.appendChild(this.buttonClose);

        /*-----------create container for action sets-----------*/
        let actionSetsContainer = document.createElement('div');
        actionSetsContainer.setAttribute('class', 'game-choose-action__sets-container');
        contentContainer.appendChild(actionSetsContainer);

        /*-----------create sets for actions-----------*/
        this.actionSetHit = document.createElement('div');
        this.actionSetHit.setAttribute('class', 'game-choose-action__action-hit-set');
        this.actionSetBlock = document.createElement('div');
        this.actionSetBlock.setAttribute('class', 'game-choose-action__action-block-set');
        actionSetsContainer.appendChild(this.actionSetHit);
        actionSetsContainer.appendChild(this.actionSetBlock);


        /*#############fill sets for actions###############*/
        /*-----------fill hit set-----------*/
        let hitHeader = document.createElement('div');
        hitHeader.setAttribute('class', 'game-choose-action__button_tabs');
        hitHeader.innerText = 'Hit';
        this.actionSetHit.appendChild(hitHeader);

        /*-----------create set for hit controls-----------*/
        this.setHitControls = document.createElement('div');
        this.setHitControls.setAttribute('class', 'action-set-controls');
        this.actionSetHit.appendChild(this.setHitControls);

        /*-----------fill block set-----------*/
        let blockHeader = document.createElement('div');
        blockHeader.setAttribute('class', 'game-choose-action__button_tabs');
        blockHeader.innerText = 'Block';
        this.actionSetBlock.appendChild(blockHeader);

        /*-----------create set for block controls-----------*/
        this.setBlockControlls = document.createElement('div');
        this.setBlockControlls.setAttribute('class', 'action-set-controls');
        this.actionSetBlock.appendChild(this.setBlockControlls);
        /*#####################################################*/

        /*-----------create controls blocks for block set-----------*/
        let containerBlockMethodControls = document.createElement('div');
        containerBlockMethodControls.setAttribute('class', 'game-choose-action__action-hit-set__column');
        this.setBlockControlls.appendChild(containerBlockMethodControls);

        this.buttonBlockHead = document.createElement('div');
        this.buttonBlockHead.setAttribute('class', 'game-choose-action__button_choose');
        this.buttonBlockHead.innerText = 'head';

        this.buttonBlockBody = document.createElement('div');
        this.buttonBlockBody.setAttribute('class', 'game-choose-action__button_choose');
        this.buttonBlockBody.innerText = 'body';
        containerBlockMethodControls.appendChild(this.buttonBlockBody);
        containerBlockMethodControls.appendChild(this.buttonBlockHead);

        /*-----------create controls blocks for hit set-----------*/
        let containerHitMethodControls = document.createElement('div');
        containerHitMethodControls.setAttribute('class', 'game-choose-action__action-hit-set__column');
        let containerHitTargetControls = document.createElement('div');
        containerHitTargetControls.setAttribute('class', 'game-choose-action__action-hit-set__column');
        this.setHitControls.appendChild(containerHitMethodControls);
        this.setHitControls.appendChild(containerHitTargetControls);

        /*-----------fill controls blocks for hit set-----------*/
        /*##############-methods-################*/
        let hitMethodHeadText = document.createElement('h3');
        hitMethodHeadText.innerText = 'Method';
        containerHitMethodControls.appendChild(hitMethodHeadText);

        this.buttonHitMethodHead = document.createElement('div');
        this.buttonHitMethodHead.setAttribute('class', 'game-choose-action__button_choose');
        this.buttonHitMethodHead.innerText = 'Head';
        containerHitMethodControls.appendChild(this.buttonHitMethodHead);

        this.buttonHitMethodArm = document.createElement('div');
        this.buttonHitMethodArm.setAttribute('class', 'game-choose-action__button_choose');
        this.buttonHitMethodArm.innerText = 'Arm';
        containerHitMethodControls.appendChild(this.buttonHitMethodArm);

        this.buttonHitMethodLeg = document.createElement('div');
        this.buttonHitMethodLeg.setAttribute('class', 'game-choose-action__button_choose');
        this.buttonHitMethodLeg.innerText = 'Leg';
        containerHitMethodControls.appendChild(this.buttonHitMethodLeg);

        /*##############-targets-################*/
        let hitTargetHeadText = document.createElement('h3');
        hitTargetHeadText.innerText = 'Target';
        containerHitTargetControls.appendChild(hitTargetHeadText);

        this.buttonHitTargetHead = document.createElement('div');
        this.buttonHitTargetHead.setAttribute('class', 'game-choose-action__button_choose');
        this.buttonHitTargetHead.innerText = 'Head';
        containerHitTargetControls.appendChild(this.buttonHitTargetHead);

        this.buttonHitTargetBody = document.createElement('div');
        this.buttonHitTargetBody.setAttribute('class', 'game-choose-action__button_choose');
        this.buttonHitTargetBody.innerText = 'Body';
        containerHitTargetControls.appendChild(this.buttonHitTargetBody);

        /*--------------create probability block info--------------*/
        /*this.probabilityContainer = document.createElement('div');
        this.probabilityContainer.setAttribute('class', 'game-choose-action__probability-block');
        contentContainer.appendChild(this.probabilityContainer);

        this.probabilityInfo = document.createElement('h5');
        this.probabilityContainer.appendChild(this.probabilityInfo);

        this.probabilityInfo.innerHTML = `<action>Hit head</action> = <probability>the smallest</probability> probability, damage is the <damage>biggest</damage>.</br>
                                        <action>Hit arm</action> = <probability>the biggest</probability> probability, damage is the <damage>smallest</damage>.</br>
                                          <action>Hit leg</action> = <probability>average</probability> probability, damage is <damage>average</damage>.</br>`;

*/
        /*--------------create button choose--------------*/
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
        if (action !== null && typeof action !== 'undefined') {
            this.buffAction.init(action.hit.method, action.hit.target, action.block.method);
            //console.log(this.buffAction);
        } else {
            this.buffAction = new StepObject();
        }

        this.action = Object.assign({}, action);

        if (action !== null && typeof action !== 'undefined') {
            switch (this.action.hit.method) {
                case 'head': {
                    this._setButtonActionFocus(this.buttonHitMethodHead);
                    break;
                }
                case 'arm': {
                    this._setButtonActionFocus(this.buttonHitMethodArm);
                    break;
                }
                case 'leg': {
                    this._setButtonActionFocus(this.buttonHitMethodLeg);
                    break;
                }
            }
            switch (this.action.hit.target) {
                case 'head': {
                    this._setButtonActionFocus(this.buttonHitTargetHead);
                    break;
                }
                case 'body': {
                    this._setButtonActionFocus(this.buttonHitTargetBody);
                    break;
                }
            }
            switch (this.action.block.method) {
                case 'body': {
                    this._setButtonActionFocus(this.buttonBlockBody);
                    break;
                }
                case 'head': {
                    this._setButtonActionFocus(this.buttonBlockHead);
                    break;
                }
            }
        }
    }

    /**
     * Инициализация слушателей кнопок по выбору действий
     * @private
     */
    _initActionSetsListeners() {
        this.actionListenersMap = new Map();
        //TODO normalize
        this.chooseMethodHitHead = function () {
            this.clearHitMethodFocus();
            this.buffAction.hit.method = 'head';
            this._setButtonActionFocus(this.buttonHitMethodHead);
        };
        this.chooseThanHitArm = function () {
            this.clearHitMethodFocus();
            this.buffAction.hit.method = 'arm';
            this._setButtonActionFocus(this.buttonHitMethodArm);

        };
        this.chooseThanHitLeg = function () {
            this.clearHitMethodFocus();
            this.buffAction.hit.method = 'leg';
            this._setButtonActionFocus(this.buttonHitMethodLeg);
        };
        this.chooseWhereHitHead = function () {
            this.clearHitTargetFocus();
            this.buffAction.hit.target = 'head';
            this._setButtonActionFocus(this.buttonHitTargetHead);
        };
        this.chooseWhereHitBody = function () {
            this.clearHitTargetFocus();
            this.buffAction.hit.target = 'body';
            this._setButtonActionFocus(this.buttonHitTargetBody);
        };

        this.buttonHitMethodHead.addEventListener('click', this.chooseMethodHitHead.bind(this));
        this.buttonHitMethodArm.addEventListener('click', this.chooseThanHitArm.bind(this));
        this.buttonHitMethodLeg.addEventListener('click', this.chooseThanHitLeg.bind(this));
        this.buttonHitTargetHead.addEventListener('click', this.chooseWhereHitHead.bind(this));
        this.buttonHitTargetBody.addEventListener('click', this.chooseWhereHitBody.bind(this));

        this.chooseBlockHead = function () {
            this.clearBlockMethodFocus();
            this.buffAction.block.method = 'head';
            this._setButtonActionFocus(this.buttonBlockHead);
        };
        this.chooseBlockBody = function () {
            this.clearBlockMethodFocus();
            this.buffAction.block.method = 'body';
            this._setButtonActionFocus(this.buttonBlockBody);
        };

        this.buttonBlockHead.addEventListener('click', this.chooseBlockHead.bind(this));
        this.buttonBlockBody.addEventListener('click', this.chooseBlockBody.bind(this));
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
    clearBlockMethodFocus() {
        this.buttonBlockHead.classList.remove('game-choose-action__button_choose_focused');
        this.buttonBlockBody.classList.remove('game-choose-action__button_choose_focused');
    }

    /**
     * Убрать фокусы со всех кнопок удара "чем"
     */
    clearHitMethodFocus() {
        this.buttonHitMethodArm.classList.remove('game-choose-action__button_choose_focused');
        this.buttonHitMethodHead.classList.remove('game-choose-action__button_choose_focused');
        this.buttonHitMethodLeg.classList.remove('game-choose-action__button_choose_focused');
    }

    /**
     * Убрать фокусы со всех кнопок удара "куда"
     */
    clearHitTargetFocus() {
        this.buttonHitTargetHead.classList.remove('game-choose-action__button_choose_focused');
        this.buttonHitTargetBody.classList.remove('game-choose-action__button_choose_focused');
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
        this.clearHitTargetFocus();
        this.clearHitMethodFocus();
        this.clearBlockMethodFocus()
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

            if (this.buffAction.checkOnEmpty()) {
                this.hide();
                this.deleteButtonAction();

                callback(this.buffAction);

                this._clearFocused();
            } else {
                IziToast.error({
                    title: 'Fill actions',
                    position: 'topCenter'
                });
            }
        };

        this.buttonClose.addEventListener('click', this.actionCallbackClose.bind(this));
        this.btnChoose.addEventListener('click', this.actionCallbackChoose.bind(this));
    }

    /**
     * Удалить слушатели
     */
    deleteButtonAction() {
        this.buttonClose.removeEventListener('click', this.actionCallbackClose);
        this.btnChoose.removeEventListener('click', this.actionCallbackChoose);

        this.buttonHitMethodHead.removeEventListener('click', this.chooseMethodHitHead);
        this.buttonHitMethodArm.removeEventListener('click', this.chooseThanHitArm);
        this.buttonHitMethodLeg.removeEventListener('click', this.chooseThanHitLeg);
        this.buttonHitTargetHead.removeEventListener('click', this.chooseWhereHitHead);
        this.buttonHitTargetBody.removeEventListener('click', this.chooseWhereHitBody);
    }
}