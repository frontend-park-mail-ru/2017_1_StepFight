/**
 * Created by Denis on 08.04.2017.
 */
import "./game-controls.scss";
import "./__button/game-controls__button.scss";
import "./__action-button/game-controls__action-button.scss";
import SpeechControl from "../speech-control/SpeechControl";
import "sweetalert/dist/sweetalert.css";
import swal from "sweetalert";

export default class GameControls {
    constructor(node, gameActionModal, managerContext) {
        this.node = node;
        this.gameActionModal = gameActionModal;
        this.managerContext = managerContext;
        this.isButtonStepActive = true;
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

        if (navigator.onLine) {
            this.speechControl = new SpeechControl(this.actionContainer);
            this.speechControl.render();
            this.speechControl.start();
        }

        container.appendChild(this.actionContainer);

        this.btnStep = document.createElement('div');
        this.btnStep.setAttribute('id', 'btn-next-step');
        this.btnStep.setAttribute('class', 'game-controls__button');
        this.btnStepText = document.createElement('p');
        this.btnStepText.innerText = 'Create step';
        this.btnStep.appendChild(this.btnStepText);
        container.appendChild(this.btnStep);

        this.btnHelp = document.createElement('h2');
        this.btnHelp.setAttribute('class', 'game-controls__button_help');
        this.btnHelp.innerText = 'help';
        container.appendChild(this.btnHelp);

        this.node.appendChild(container);
        this.initHelpListener();
    }

    initHelpListener() {
        this.btnHelp.addEventListener('click', (event) => {
            swal({
                title: "HOW TO USE",
                text: "<h3>Keywords in speech:</h3>\n " +
                "<ul class='keywords'>" +
                "<li>Ударить Рукой|Ногой|Головой</li>" +
                "<li>В тело|В голову</li>" +
                "<li>Блок Головы|Тела</li>" +
                "</ul> ",
                html: true,
                animation: 'slide-from-top',
            });
        });
    }

    /**
     * Инициализация слушателей на кнопку "сделать шаг"
     * @param callback
     */
    initDoStepListener(callback) {
        this.createStep = function () {
            if (this.isButtonStepActive) {
                callback();
            }
        };
        this.btnStep.addEventListener('click', this.createStep.bind(this));
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
        this.gameActionModal.initButtonsAction((actionObj) => {
            callback(actionObj);
        });

        this.actionAddCallback = function () {
            if (this.isButtonStepActive) {
                this.gameActionModal.setStartAction(this.managerContext.strategy.myStep);
                this.gameActionModal.show();
            }
        };

        this.buttonAddAction.addEventListener('click', this.actionAddCallback.bind(this));
    }

    /**
     * Удалить слушателя на кнопку "выбрать действие"
     */
    deleteActionListener() {
        this.buttonAddAction.removeEventListener('click', this.actionAddCallback);
        this.gameActionModal.deleteButtonAction();
    }

    setButtonStepStatus(law) {
        this.isButtonStepActive = law;
        if (law) {
            this.btnStep.classList.remove('game-controls__button_disabled');
            this.btnStepText.innerText = 'Create step';
        } else {
            this.btnStep.classList.add('game-controls__button_disabled');
            this.btnStepText.innerText = 'Wait ...';
        }
    }
}