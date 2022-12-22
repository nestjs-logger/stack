import type { LogLevel, LoggerService } from '@nestjs/common';

export class StackLogger implements LoggerService {
	constructor(protected loggers: LoggerService[]) {
		//
	}

	log(message: any, ...optionalParams: any[]) {
		this.loggers.forEach((logger) => logger.log(message, ...optionalParams));
	}

	error(message: any, ...optionalParams: any[]) {
		this.loggers.forEach((logger) => logger.error(message, ...optionalParams));
	}

	warn(message: any, ...optionalParams: any[]) {
		this.loggers.forEach((logger) => logger.warn(message, ...optionalParams));
	}

	debug(message: any, ...optionalParams: any[]) {
		this.loggers.forEach((logger) => logger.debug?.(message, ...optionalParams));
	}

	verbose(message: any, ...optionalParams: any[]) {
		this.loggers.forEach((logger) => logger.verbose?.(message, ...optionalParams));
	}

	setLogLevels?(levels: LogLevel[]) {
		this.loggers.forEach((logger) => logger.setLogLevels?.(levels));
	}

	static create(loggers: LoggerService[]) {
		return new StackLogger(loggers);
	}
}
