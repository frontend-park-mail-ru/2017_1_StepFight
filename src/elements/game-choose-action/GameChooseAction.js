/**
 * Created by Denis on 18.04.2017.
 */
export default class GameChooseAction{
    constructor(node){
        this.node = node;
        this.action = {};
    }

    render(){
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'game-choose-action hidden');
        this.node.appendChild(this.container);

        let contentContainer = document.createElement('div');
        contentContainer.setAttribute('class', 'game-choose-action__content');
        this.container.appendChild(contentContainer);

        this.btnClose = document.createElement('span');
        this.btnClose.setAttribute('class', 'game-choose-action__close-modal');
        this.btnClose.innerHTML='&times;';
        contentContainer.appendChild(this.btnClose);

        this.btnChoose = document.createElement('div');
        this.btnChoose.setAttribute('class', 'game-choose-action__button');
        this.btnChoose.innerText = 'Ok';
        contentContainer.appendChild(this.btnChoose);
    }

    show(){
        this.container.classList.remove('hidden');
    }

    hide(){
        this.container.classList.add('hidden');
    }

    initButtonsAction(callback){
        this.actionCallbackClose = function () {
            this.hide();
            this.deleteButtonAction();
            callback(null);
        };
        this.actionCallbackChoose = function () {
            this.hide();
            this.deleteButtonAction();

            //TODO get info from
            this.action = {
                action: 'hit',
                than: 'head',
                where: 'arm'
            };

            callback(this.action);
        };

        this.btnClose.addEventListener('click', this.actionCallbackClose.bind(this));
        this.btnChoose.addEventListener('click', this.actionCallbackChoose.bind(this));
    }

    deleteButtonAction(){
        this.btnClose.removeEventListener('click', this.actionCallbackClose);
        this.btnChoose.removeEventListener('click', this.actionCallbackChoose);
    }
}