"use strict"

class House {
    constructor(config){
        if (config === undefined) {
            // devices added in room
            // [room id]->[devices]
            this.roomSetup = new Map();
            // devices' status 
            // [devices id] -> [status]
            this.devices = new Map();
            // smart things app added
            // [room]-> [devices]
            this.app = [];
        } else {
            // parse config;
        }
        
    }

    get deiveNum(){
        return this.devices.length;
    }

    statusUpdate() {
        // change device status in the house
    }
}

module.exports = House;