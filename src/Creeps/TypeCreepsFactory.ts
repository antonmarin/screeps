import CreepsFactory from "./CreepsFactory";

export default class TypeCreepsFactory implements CreepsFactory {
  private creepBody: BodyPartConstant[];
  private opts: { [p: string]: any };
  private spawner: StructureSpawn;
  private namePrefix: string;

  public constructor(creepBody: BodyPartConstant[], namePrefix: string, opts: { [key: string]: any }, spawn: StructureSpawn) {
    this.creepBody = creepBody;
    this.namePrefix = namePrefix;
    this.opts = opts;
    this.spawner = spawn;
  }

  public spawn(): void {
    this.spawner.spawnCreep(this.creepBody, this.generateName(), this.opts);
  }

  private generateName() {
    return this.namePrefix + Game.time;
  }
}
