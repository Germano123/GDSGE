class ComponentManager {
    components = [];
    
    addComponent(component) {
        this.components.push(component);
    }
}

module.exports = new ComponentManager();
