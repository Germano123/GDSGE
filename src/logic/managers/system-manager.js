const entityManager = require("./entity-manager");
const componentManager = require("./component-manager");

class SystemManager {
    systems = [];

    addSystem(system) {
        this.systems.push(system);
    }

    addEntity(entity) {
        entityManager.addEntity(entity);
    }
    
    addComponent(component) {
        componentManager.addComponent(component);
    }
}
    
module.exports = new SystemManager();
