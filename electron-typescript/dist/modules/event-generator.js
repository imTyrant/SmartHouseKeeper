"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Currently, I think this module takes the parameters, like position of user and the
 * activated devices (may be more), and considers other situations like (weather,
 * time, humidity etc..), then generates the final event.
 */
var EventGenerator = /** @class */ (function () {
    /**
     * Generate event based on physical channel?
     *
     * @param {*} config The config details, for example, weather changed with time, etc.
     * @param {Array} predefinedEvents If we need a fixed event set, this gives the list of predefined event.
     */
    function EventGenerator(config, predefinedEvents) {
        if (predefinedEvents === void 0) { predefinedEvents = null; }
        if (config === null) {
            config = {};
        }
        else {
            // No clue
            // TODO
        }
        this.config = config;
        this.predefinedEvents = predefinedEvents;
    }
    EventGenerator.prototype.happen = function (position, device) {
        /* Currently, we assume all of event is caused by device */
        return {
            // 7 physical channel
            location: position,
            motion: null,
            temperature: null,
            humidity: null,
            illumination: null,
            smoke: null,
            leakage: null,
            // 3 system channel
            switch: device,
            lock: null,
            time: null,
            mode: null
        };
    };
    return EventGenerator;
}());
exports.default = EventGenerator;
//# sourceMappingURL=event-generator.js.map