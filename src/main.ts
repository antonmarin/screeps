// Any code written outside the `loop()` method is executed only when the
// Screeps system reloads your script.
// Use this bootstrap wisely. You can cache some of your stuff to save CPU.
// You should extend prototypes before the game loop executes here.

import CompositeController from "./Controllers/CompositeController";
import CreepsPopulationController from "./Controllers/CreepsPopulationController";
import GameController from "./Controllers/GameController";
import MaintainersController from "./Controllers/MaintainersController";
import RoleCreepsPopulationObserver from "./Creeps/RoleCreepsPopulationObserver";
import TypeCreepsFactory from "./Creeps/TypeCreepsFactory";

const composite = new CompositeController();

// Maintainers
const maintainersPopulationController = new CreepsPopulationController(
  new RoleCreepsPopulationObserver(Game.creeps, 1),
  new TypeCreepsFactory([WORK, CARRY, MOVE], "Maintainer", {memory: {role: "maintainer"}}, Game.spawns["Spawn1"])
);
composite.addController(maintainersPopulationController);
composite.addController(new MaintainersController(Game.creeps));

/**
 * Screeps system expects this "loop" method in main.js to run the
 * application. If we have this line, we can be sure that the globals are
 * bootstrapped properly and the game loop is executed.
 * http://support.screeps.com/hc/en-us/articles/204825672-New-main-loop-architecture
 *
 * @export
 */

function gameLoop(controller: GameController) {
  controller.tick();
}

export const loop = gameLoop(composite);
