/**
 * Created by Denis on 02.04.2017.
 */
export default class GameControllers{
    constructor(node){
        console.log('GameControllers.c');
        this.node = node;

        this.previous = {};
        this.keys = {};

        this._onMouseDown = this._keyHandler.bind(this, 'down');
        this._onMouseUp = this._keyHandler.bind(this, 'up');
        //this._onMouseMove = this._keyHandler.bind(this, 'move');
    }

    /**
     * Начинаем слушать события клавиатуры
     */
    init() {
        this.node.addEventListener('mousedown', this._onMouseDown);
        this.node.addEventListener('mouseup', this._onMouseUp);
       // document.addEventListener('mousemove', this._onMouseMove);
    }


    /**
     * Обработчик события
     * @param  {string} type
     * @param  {MouseEvent} event
     */
    _keyHandler(type, event) {
        console.log(type);
        console.log(event);
        //this.keys[event.key.toLowerCase()] = type === 'press';
    }

    /**
     * Прекращаем слушать события клавиатуры
     */
    destroy() {
        this.node.removeEventListener('mousedown', this._onMouseDown);
        this.node.removeEventListener('mouseup', this._onMouseUp);
        //document.removeEventListener('mousemove', this._onMouseMove);
    }
}