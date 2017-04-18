/**
 * Created by Denis on 23.03.2017.
 */

export default class Diamond {
    constructor(color, strokeWidth) {
        this._render(color || 'white', strokeWidth || '2');
    }

    /**
     * Возвращает элемент 
     * @return {Diamond}
     */
    getElem() {
        return this;
    }

    /**
     * Отрисовка элемент
     * @param color
     * @param strokeWidth
     * @private
     */
    _render(color, strokeWidth) {
        this.el = document.createElement('canvas');
        this.el.setAttribute('width', '50');
        this.el.setAttribute('height', '50');
        this.el.setAttribute('class', 'diamond');
        if(this.el.getContext){
            let context = this.el.getContext('2d');
            context.beginPath();
            context.lineWidth=`${strokeWidth}`;
            context.strokeStyle=`${color}`;
            context.moveTo(12,8);
            context.lineTo(38,8);
            context.lineTo(47,19);
            context.lineTo(25,45);
            context.lineTo(2,19);
            context.lineTo(12,8);
            context.lineTo(17,19);
            context.lineTo(25,8);
            context.lineTo(32,19);
            context.lineTo(38,8);
            context.moveTo(2,19);
            context.lineTo(47,19);
            context.moveTo(17,19);
            context.lineTo(25,45);
            context.lineTo(32,19);
            context.stroke();
        }
    }
}