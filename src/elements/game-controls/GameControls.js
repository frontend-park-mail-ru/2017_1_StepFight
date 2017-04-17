/**
 * Created by Denis on 08.04.2017.
 */
export default class GameControls {
    constructor(node) {
        this.node = node;
    }

    render() {
        let container = document.createElement('div');
        container.setAttribute('id', 'command-div');
        container.setAttribute('class', 'game-controls');

        let commandBox = document.createElement('textarea');
        commandBox.setAttribute('id', 'commands');
        commandBox.setAttribute('class', 'game-controls__textarea');
        commandBox.setAttribute('placeholder', 'Your commands');

        this.btnStep = document.createElement('div');
        this.btnStep.setAttribute('id', 'btn-next-step');
        this.btnStep.setAttribute('class', 'game-controls__button');
        let text = document.createElement('p');
        text.innerText = 'Create step';
        this.btnStep.appendChild(text);

        container.appendChild(commandBox);
        container.appendChild(this.btnStep);
        this.node.appendChild(container);
    }

    initListener(callback) {
        this.btnStep.addEventListener('click', (event) => {
            callback();
        })
    }

    deleteListener() {
        this.btnStep.removeEventListener('click', (event) => {
        });
    }
}