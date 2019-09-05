/**
 * 
 */
const SmartThingsApp = require('./smart-app');

class light_off_with_no_motion_and_presence extends SmartThingsApp {
    constructor() {
        super("");
    }

    inputRegister(capability, ...devices) {
        switch (capability) {
            case "motionSensor":
            case "presenceSensor":
            case "switch":
                super.inputRegister(capability, devices);
                break;
            default:
                break;
        }
    }
    
    eventSubscribe() {

    }
}

module.exports = light_off_with_no_motion_and_presence;