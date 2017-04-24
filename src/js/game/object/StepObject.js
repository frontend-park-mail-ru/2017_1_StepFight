/**
 * Created by Denis on 24.04.2017.
 */
export default class StepObject {
    constructor() {
        this.hit = {
            method: null,
            target: null
        };
        this.block = {
            method: null
        };
    }

    init(hitMethod, hitTarget, blockMethod) {
        this.hit.method = hitMethod;
        this.hit.target = hitTarget;
        this.block.method = blockMethod;
    }

    checkOnEmpty() {
        if (this.hit.method !== null && this.hit.target !== null
            && this.block.method !== null) {
            return true;
        }
    }
}