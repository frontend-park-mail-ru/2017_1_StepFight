/**
 * Created by Denis on 21.05.2017.
 */
export default class ElementCreator {


    /**
     * Получить массив элементов
     * @param elements - инструкции по созданию
     * @private
     */
    static getElems(elements) {
        return elements.map(data => {
            let elem = document.createElement(data.type);
            this.setAttrs(data.attrs, elem);
            elem.innerText = data.text;
            return elem;
        });
    }

    /**
     * Установка массив атрибкутов
     * @param attrs
     * @param elem
     * @private
     */
    static setAttrs(attrs, elem) {
        Object.keys(attrs).forEach(name => {
            elem.setAttribute(name, attrs[name]);
        });
    }

    /**
     * Добавить массив элементов
     * @param array
     * @param elem
     * @private
     */
    static elemsAppendTo(array, elem) {
        array.forEach(item => {
            elem.appendChild(item);
        })
    }

    static _parseElements(elements, node) {
        elements.forEach(elem => {
            let container = document.createElement(elem.type);
            if (elem.attrs !== null && typeof elem.attrs !== 'undefined')
                this.setAttrs(elem.attrs, container);
            if (elem.text !== null && typeof elem.text !== 'undefined')
                container.innerText = elem.text;
            if (typeof elem.elements !== 'undefined' && Array.isArray(elem.elements))
                this._parseElements(elem.elements, container);
            node.appendChild(container);
        });
    }

    static create(config, node) {
        if (config.elements !== null && typeof config.elements !== 'undefined')
            this._parseElements(config.elements, node);
    }
}