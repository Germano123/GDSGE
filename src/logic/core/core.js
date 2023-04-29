const systemManager = require("../managers/system-manager.js");
const entityManager = require("../managers/entity-manager.js");
const componentManager = require("../managers/component-manager.js");

const Building = require("../game/entities/buildings/building.js");

const a = new Building("Mercado", 100);
const b = new Building("Quartel", 150);

console.log(a.components["HealthComponent"].getCurrentHealth());

function gameloop() {
    // input();
    // update();
    // render();
    requestAnimationFrame(gameloop);
}

function input() {
    // console.log("Reading inputs");
}

function update() {
    // console.log("Updating");
    // systemManager.systems.forEach((system) => {
    //     system.update();
    // })
}

function render() {
    // console.log("Rendering");
}

gameloop();
