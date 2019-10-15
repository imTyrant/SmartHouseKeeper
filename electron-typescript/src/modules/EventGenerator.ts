"use strict"

/**
 * Currently, I think this module takes the parameters, like position of user and the 
 * activated devices (may be more), and considers other situations like (weather, 
 * time, humidity etc..), then generates the final event.
 */
export default class EventGenerator {
    private config: any;
    private predefinedEvents: any;

    /**
     * Generate event based on physical channel?
     * 
     * @param {*} config The config details, for example, weather changed with time, etc.
     * @param {Array} predefinedEvents If we need a fixed event set, this gives the list of predefined event.
     */
    constructor(config: any, predefinedEvents: any = null) {
        if (config === null) {
            config = {};
        } else {
            // No clue
            // TODO
        }
        this.config = config;
        this.predefinedEvents = predefinedEvents;
    }

    happen(position: any, device: any) {
        /* Currently, we assume all of event is caused by device */
        return {
            // 7 physical channel
            location: position, // The current position of the user.
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
        }
    }
    
    /**
     * NOTE:
     * What a user can change includes: location, switch, lock(contact sensor?), and mode.
     * The other physical channels are changed by environment or actions of devices.
     * Hence, I think we should simulate the devices' action. The detail is that if
     * the device is (de)activated, it will change physical channels (achieved by
     * device simulator).
     */
}