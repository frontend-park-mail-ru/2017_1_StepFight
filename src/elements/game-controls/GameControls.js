/**
 * Created by Denis on 08.04.2017.
 */
export default class GameControls {
    constructor(node, sceneContext) {
        this.node = node;
        this.sceneContext = sceneContext;
    }

    /**
     * Отрисовка элемент
     */
    render() {
        let container = document.createElement('div');
        container.setAttribute('class', 'game-controls');

        this.actionContainer = document.createElement('div');
        this.actionContainer.setAttribute('class', 'game-controls_actions');

        this.buttonAddAction = document.createElement('div');
        this.buttonAddAction.innerText = 'add actions';
        this.buttonAddAction.setAttribute('class', 'game-controls__action-button_empty');
        this.actionContainer.appendChild(this.buttonAddAction);

        container.appendChild(this.actionContainer);

        this.btnStep = document.createElement('div');
        this.btnStep.setAttribute('id', 'btn-next-step');
        this.btnStep.setAttribute('class', 'game-controls__button');
        let text = document.createElement('p');
        text.innerText = 'Create step';
        this.btnStep.appendChild(text);

        container.appendChild(this.btnStep);
        this.node.appendChild(container);
    }

    /**
     * Инициализация слушателей на кнопку "сделать шаг"
     * @param callback
     */
    initDoStepListener(callback) {
        this.createStep = function () {
            callback();
        };
        this.btnStep.addEventListener('click', this.createStep);
    }

    /**
     * Удалить слушателя на кнопку "сделать шаг"
     */
    deleteDoStepListener() {
        this.btnStep.removeEventListener('click', this.createStep);
    }

    /**
     * Инициализация слушателей на кнопку "выбрать действие"
     * @param callback
     */
    initActionListener(callback) {
        this.sceneContext.gameActionModal.initButtonsAction((actionObj) => {
            callback(actionObj);
        });

        this.actionAddCallback = function () {
            this.sceneContext.gameActionModal.setStartAction(this.sceneContext.manager.strategy.myStep);
            this.sceneContext.gameActionModal.show();
        };

        this.buttonAddAction.addEventListener('click', this.actionAddCallback.bind(this));
    }

    /**
     * Удалить слушателя на кнопку "выбрать действие"
     */
    deleteActionListener() {
        this.buttonAddAction.removeEventListener('click', this.actionAddCallback);
        this.sceneContext.gameActionModal.deleteButtonAction();
    }
}