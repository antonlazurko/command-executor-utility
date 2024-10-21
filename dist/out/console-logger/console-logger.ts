"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
class ConsoleLogger {
    public static getLoggerInstance() {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }
        return ConsoleLogger.logger;
    }
    log(...args) {
        console.log(args);
    }
    error(...args) {
        console.error(args);
    }
    end() {
        console.log('Done');
    }
}
exports.ConsoleLogger = ConsoleLogger;
