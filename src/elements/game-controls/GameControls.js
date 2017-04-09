/**
 * Created by Denis on 08.04.2017.
 */
export default class GameControls{
    constructor(node){
        this.node = node;
    }

    render(){
        let container = document.createElement('div');
        container.setAttribute('id', 'command-div');
        container.setAttribute('class', 'game-controls');

        let commandBox= document.createElement('textarea');
        commandBox.setAttribute('id', 'commands');
        commandBox.setAttribute('class', 'game-controls__textarea');
        commandBox.setAttribute('placeholder', 'Your commands');

        let btnStep = document.createElement('div');
        btnStep.setAttribute('id', 'btn-next-step');
        btnStep.setAttribute('class', 'game-controls__button');
        let text = document.createElement('p');
        text.innerText = 'Create step';
        btnStep.appendChild(text);

        container.appendChild(commandBox);
        container.appendChild(btnStep);
        this.node.appendChild(container);
    }
}