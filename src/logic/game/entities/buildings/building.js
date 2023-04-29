const Entity = require("../../../core/entity");
const HealthComponent = require("../../components/health-component");

class Building extends Entity {
    name;

    constructor(name, maxHealth) {
        super();
        this.name = name;
        this.addComponent(new HealthComponent(maxHealth));
    }
}

module.exports = Building;
