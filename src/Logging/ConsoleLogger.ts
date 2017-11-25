import Logger from "./Logger";
import {LogLevel} from "./LogLevel";

export default class ConsoleLogger implements Logger {
  private levels: LogLevel[];

  public constructor(levels: LogLevel[]) {
    this.levels = levels;
  }

  public log(level: LogLevel, message: string, context?: any): void {
    if (this.levels.indexOf(level) !== -1) {
      const levelHint = "[" + this.createLevelHint(level) + "]";
      console.log(levelHint + " " + message, context);
    }
  }

  public debug(message: string, context?: any): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  public info(message: string, context?: any): void {
    this.log(LogLevel.INFO, message, context);
  }

  public warning(message: string, context?: any): void {
    this.log(LogLevel.WARNING, message, context);
  }

  public error(message: string, context?: any): void {
    this.log(LogLevel.ERROR, message, context);
  }

  private createLevelHint(level: LogLevel): string {
    switch (level) {
      case LogLevel.ERROR:
        return "ERROR";
      case LogLevel.WARNING:
        return "WARNING";
      case LogLevel.INFO:
        return "INFO";
      case LogLevel.DEBUG:
        return "DEBUG";
      default:
        throw new TypeError("Passed message with unknown logging level");
    }
  }
}
