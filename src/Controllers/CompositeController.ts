import GameController from "./GameController";

export default class CompositeController implements GameController {
  private controllers: GameController[];

  public constructor() {
    this.controllers = [];
  }

  public tick(): void {
    this.controllers.forEach((controller: GameController) => {
      controller.tick();
    });
  }

  public addController(controller: GameController): void {
    this.controllers.push(controller);
  }
}
