import {LogLevel} from "./LogLevel";

export default interface Logger {
  log(level: LogLevel, message: string, context?: any): void;
  debug(message: string, context?: any): void;
  info(message: string, context?: any): void;
  warning(message: string, context?: any): void;
  error(message: string, context?: any): void;
}
