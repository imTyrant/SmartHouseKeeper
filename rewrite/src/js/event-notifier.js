"use strict"

const EventEmitter = require('events');

class EventNotifier extends EventEmitter {
    constructor() {
        super();
    }
}

STEventEmitter.MOTION_SENSOR_CHANGED = "motion";
STEventEmitter.MOTION_SENSOR_ACTIVATE = "motion.active";
STEventEmitter.MOTION_SENSOR_INACTIVE = "motion.inactive";

module.exports = EventNotifier;