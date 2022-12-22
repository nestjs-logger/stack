"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackLogger = void 0;
var StackLogger = /** @class */ (function () {
    function StackLogger(loggers) {
        this.loggers = loggers;
        //
    }
    StackLogger.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.loggers.forEach(function (logger) { return logger.log.apply(logger, __spreadArray([message], optionalParams, false)); });
    };
    StackLogger.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.loggers.forEach(function (logger) { return logger.error.apply(logger, __spreadArray([message], optionalParams, false)); });
    };
    StackLogger.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.loggers.forEach(function (logger) { return logger.warn.apply(logger, __spreadArray([message], optionalParams, false)); });
    };
    StackLogger.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.loggers.forEach(function (logger) { var _a; return (_a = logger.debug) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray([logger, message], optionalParams, false)); });
    };
    StackLogger.prototype.verbose = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.loggers.forEach(function (logger) { var _a; return (_a = logger.verbose) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray([logger, message], optionalParams, false)); });
    };
    StackLogger.prototype.setLogLevels = function (levels) {
        this.loggers.forEach(function (logger) { var _a; return (_a = logger.setLogLevels) === null || _a === void 0 ? void 0 : _a.call(logger, levels); });
    };
    StackLogger.create = function (loggers) {
        return new StackLogger(loggers);
    };
    return StackLogger;
}());
exports.StackLogger = StackLogger;
