/**
 * This is an abstract class for all kinds of SmartThings apps.
 * All of SmartThings app should inherit this class.
 */

class SmartThingsApp {
    constructor(description) {
        this.description = description;
        this.input = new Map();
    }

    setEmitter(e) {
        this.emitter = e;
    }

    getDescription() {
        return this.description;
    }

    /**
     * @override
     * @param {string} capability 
     * @param  {...object} devices 
     */
    inputRegister(capability, ...devices) {
        if (!this.input.has(capability)) {
            this.input.set(capability, new Array());
        }
        this.input.capability = devices;
    }

    /**
     * 
     * @param {string} type 
     * @param  {Map} value 
     */
    valueConfig(type, value) {
        if (!this.input.has(type)) {
            this.input.set(type, new Map());
        }
        // if (value instanceof Map) {
        //     this.input.get(type).set()
        // }
        // this.input.get(type)
    }

    /**
     * @override
     * Check whether the setting is completed.
     */
    checkSettingCompleteness() {}
}

module.exports = SmartThingsApp;