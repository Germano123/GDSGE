const systemManager = require("../../managers/system-manager");
const Component = require("../../core/component");

class HealthComponent extends Component {
    maxHealth;
    currentHealth;

    constructor(maxHealth) {
        super();
        this.maxHealth = maxHealth;
        this.currentHealth = this.maxHealth;
        systemManager.addComponent(this);
    }

    getMaxHealth() {
        return this.maxHealth;
    }
    
    getCurrentHealth() {
        return this.currentHealth;
    }
}

module.exports = HealthComponent;