"use strict"

export default class AppSimulator{
    private subscribedEvents: any;


    constructor(config: any){
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
    public parseEvent() {
        
    }
}