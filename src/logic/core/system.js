class System {
    type;
    components;

    constructor() {
        if (this.constructor.name === System) {
            throw new Error("Can't instantiate abstract class.");
        }
        this.type = "";
        this.components = [];
    }

    get type() {
        return this.constructor.name;
    }

    addComponent(component) {
        if (component.type === this.type) {
            this.components.push(component);
        }
    }

    update() {
        console.log(`System ${ id } is updating...`);
    }
}

class HealthSystem extends System {
    constructor() {
        super();
        this.type = "HealthComponent";
    }
}