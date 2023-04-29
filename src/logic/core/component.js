class Component {
    entityId;

    constructor() {
        if (this.constructor.name === Component) {
            throw new Error("Can't instantiate abstract class.");
        }
    }

    get type() {
        return this.constructor.name;
    }

    getEntityId() {
        return this.entityId;
    }
}

module.exports = Component;