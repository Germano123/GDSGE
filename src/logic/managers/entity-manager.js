class EntityManager {
    entities = [];
    
    addEntity(entity) {
        this.entities.push(entity);
    }
}

module.exports = new EntityManager();
