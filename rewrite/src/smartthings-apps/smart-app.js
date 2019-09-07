/**
 * This is an abstract class for all kinds of SmartThings apps.
 * All of SmartThings app should inherit this class.
 */

class SmartThingsApp {
    constructor(description) {
        this.description = description;
        this.preferences = new Map();
    }

    setEmitter(e) {
        this.emitter = e;
    }

    getDescription() {
        return this.description;
    }

    /**
     * @Override
     * @param {string} capability 
     * @param  {...object} devices 
     */
    preferencesConfig(capability, ...devices) {
        this.preferences.set(capability, devices);
    }

    /**
     * @Override
     * Check whether the setting is completed.
     */
    checkSettingCompleteness() {}

    /**
     * @Override
     * Install the app.
     */
    install() {}
}

module.exports = SmartThingsApp;