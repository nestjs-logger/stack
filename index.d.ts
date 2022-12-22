import type { LogLevel, LoggerService } from '@nestjs/common';
export declare class StackLogger implements LoggerService {
    protected loggers: LoggerService[];
    constructor(loggers: LoggerService[]);
    log(message: any, ...optionalParams: any[]): void;
    error(message: any, ...optionalParams: any[]): void;
    warn(message: any, ...optionalParams: any[]): void;
    debug(message: any, ...optionalParams: any[]): void;
    verbose(message: any, ...optionalParams: any[]): void;
    setLogLevels?(levels: LogLevel[]): void;
    static create(loggers: LoggerService[]): StackLogger;
}
