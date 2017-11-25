import CreepsPopulationObserver from "./CreepsPopulationObserver";

export default class RoleCreepsPopulationObserver implements CreepsPopulationObserver {
  public populationLimit: number;
  private creeps: {[creepName: string]: Creep};

  public constructor(creeps: {[creepName: string]: Creep}, populationLimit: number) {
    this.creeps = creeps;
    this.populationLimit = populationLimit;
  }

  public getPopulation() {
    return _.size(this.creeps);
  }
}
