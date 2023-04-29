const { uuid } = require("uuidv4");
const systemManager = require("../managers/system-manager");

class Entity {
    id;
    components = {};

    constructor() {
        if (this.constructor.name === Entity) {
            throw new Error("Can't instantiate abstract class.");
        }
        this.id = uuid();
        systemManager.addEntity(this);
    }

    get type() {
        return this.constructor.name;
    }

    addComponent(component) {
        const componentName = component.type;
        // check if already has that kind of component
        if (!this.getComponent(componentName)) {
            // TODO: check if component already has an entity
            component.entityId = this.id;
            this.components[componentName] = component;
            console.log(this.components);
        }
    }

    getComponent(name) {
        return this.components[name];
    }
}

module.exports = Entity;
