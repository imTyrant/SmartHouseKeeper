/**
 * 
 */
const SmartThingsApp = require('./smart-app');

class light_off_with_no_motion_and_presence extends SmartThingsApp {
    constructor() {
        super("Turn lights off when no motion and presence is detected for a set period of time.");
    }

    preferencesConfig(identifier, ...devices) {
        switch (capability) {
            // Alias of the capabilities.
            case "motionSensor":
            case "presenceSensor":
            case "switch":
            case "delayMins":
                super.preferencesConfig(capability, devices);
                break;
            default:
                break;
        }
    }

    install() {
        
    }
}

module.exports = light_off_with_no_motion_and_presence;