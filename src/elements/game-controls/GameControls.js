/**
 * Created by Denis on 08.04.2017.
 */
export default class GameControls {
    constructor(node, sceneContext) {
        this.node = node;
        this.sceneContext = sceneContext;
        this.actionButtons = new Array(5);
    }

    render() {
        let container = document.createElement('div');
        container.setAttribute('class', 'game-controls');

        this.actionContainer = document.createElement('div');
        this.actionContainer.setAttribute('id', 'command-div');
        this.actionContainer.setAttribute('class', 'game-controls_actions');

        for (let i = 0; i < 5; i++) {
            let action = document.createElement('div');
            action.innerText = 'add action';
            action.setAttribute('class', 'action game-controls__action-button_empty');
            action.setAttribute('index', i);
            this.actionContainer.appendChild(action);
            this.actionButtons[i] = action;
        }
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

    initDoStepListener(callback) {
        this.createStep = function () {
            callback();
        };
        this.btnStep.addEventListener('click', this.createStep);
    }

    deleteDoStepListener() {
        this.btnStep.removeEventListener('click', this.createStep);
    }

    initActionListener(callback) {
        this.sceneContext.gameActionModal.initButtonsAction((action) => {
            if(this.index !== null && typeof this.index !== 'undefined'){
                callback(this.index, action);
            }
        });

        this.actionCallback = function (event) {
            if (event.target.classList.contains('action') && event.target.getAttribute('index')) {
                this.index = event.target.getAttribute('index');
                this.sceneContext.gameActionModal.show();
            }
        };
        this.actionContainer.addEventListener('click', this.actionCallback.bind(this));
    }

    deleteActionListener() {
        this.actionContainer.removeEventListener('click', this.actionCallback);
        this.sceneContext.gameActionModal.deleteButtonAction();
    }
}