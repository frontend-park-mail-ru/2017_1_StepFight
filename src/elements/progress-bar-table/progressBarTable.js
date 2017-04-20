/**
 * Created by Denis on 20.04.2017.
 */
export default class ProgressBarTable {
    constructor(node) {
        this.node = node;
    }

    render(settings) {
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'progress-bar-table');
        this.node.appendChild(this.container);

        this.progressBar = document.createElement('div');
        this.progressBar.setAttribute('class', 'loader_parent');
        this.container.appendChild(this.progressBar);

        this._addText(settings);
    }

    _addText(settings) {
        let textArray = settings.conf;
        textArray.forEach(elem => {
            let text = document.createElement('h1');
            text.innerText = elem.text;
            this.container.appendChild(text);
        })

    }

    remove() {
        this.node.removeChild(this.container);
    }
}