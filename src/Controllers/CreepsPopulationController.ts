import CreepsFactory from "../Creeps/CreepsFactory";
import CreepsPopulationObserver from "../Creeps/CreepsPopulationObserver";
import GameController from "./GameController";

export default class CreepsPopulationController implements GameController {
  private creepsPopulationObserver: CreepsPopulationObserver;
  private creepsFactory: CreepsFactory;

  public constructor(creepsPopulationObserver: CreepsPopulationObserver, creepsFactory: CreepsFactory) {
    this.creepsPopulationObserver = creepsPopulationObserver;
    this.creepsFactory = creepsFactory;
  }

  public tick(): void {
    const observer = this.creepsPopulationObserver;
    if (observer.getPopulation() < observer.populationLimit) {
      this.creepsFactory.spawn();
    }
  }
}
