import GameController from "./GameController";

export default class MaintainersController implements GameController {
  private creeps: { [creepName: string]: Creep };

  public constructor(creeps: { [creepName: string]: Creep }) {
    this.creeps = creeps;
  }

  public tick(): void {
    for (const i in this.creeps) {
      const creep = this.creeps[i];

      if (_.size(creep.carry) < creep.carryCapacity) {
        const sources = creep.room.find(FIND_SOURCES_ACTIVE);

        const source = sources[0];
        if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
          creep.moveTo(source);
        }
      } else {
        const receivers = creep.room.find(FIND_STRUCTURES, {
          filter: (receiver) => {
            return (receiver.structureType == STRUCTURE_EXTENSION ||
              receiver.structureType == STRUCTURE_SPAWN ||
              receiver.structureType == STRUCTURE_TOWER) && receiver.energy < receiver.energyCapacity;
          }
        });
        const receiver = receivers[0];
        if (creep.transfer(receiver, RESOURCES_ALL) === ERR_NOT_IN_RANGE) {
          creep.moveTo(receiver);
        }
      }
    }
  }
}
