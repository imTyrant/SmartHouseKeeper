"use strict"

import { EventEmitter } from "electron";

class EventNotifier extends EventEmitter {

    public static MOTION_SENSOR_ACTIVATE = "motion.active";
    public static MOTION_SENSOR_INACTIVE = "motion.inactive";
    public static MOTION_SENSOR_CHANGED = "motion";
    constructor() {
        super();
    }
}
