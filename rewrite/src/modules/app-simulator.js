"use strict"

class AppSimulator{
    constructor(config){
        // [event] -> [apps]
        let mapOfApp;
        if (config === null) {
            mapOfApp = new Map();
        } else {
            // No clue.
            // TODO
        }
        this.subscribedEvents = mapOfApp;
    }

    // receive event and trigger action
    parseEvent() {
        
    }
}

module.exports = AppSimulator;