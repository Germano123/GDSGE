class Abstract {
    constructor() {
        if (this.constructor == Abstract) {
            throw new Error("Can't instantiate abstract class.");
        }
    }
}