"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppSimulator = /** @class */ (function () {
    function AppSimulator(config) {
        // [event] -> [apps]
        var mapOfApp;
        if (config === null) {
            mapOfApp = new Map();
        }
        else {
            // No clue.
            // TODO
        }
        this.subscribedEvents = mapOfApp;
    }
    // receive event and trigger action
    AppSimulator.prototype.parseEvent = function () {
    };
    return AppSimulator;
}());
exports.default = AppSimulator;
//# sourceMappingURL=app-simulator.js.map