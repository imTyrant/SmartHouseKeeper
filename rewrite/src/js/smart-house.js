"use strict"
const path = require('path');
const crypto = require('crypto');


const HouseDetail = require('../../app/js/house-detail.js');
const IPCChannel = require('../configure/ipc-channel.js');

class SmartHouse {
    constructor(config){
        this.rooms = HouseDetail.room;
        this.devices = HouseDetail.device;
        if (config === undefined) {
            // devices added in room
            // [room id]->[devices]
            this.roomSetup = new Map();
            // devices' status 
            // [devices id] -> [status]
            this.addedDevices = new Map();
            // smart things app added
            // [room]-> [devices]
            this.app = [];
        } else {
            // parse config;
        }
    }

    get addedDevicesNum(){
        return this.addedDevices.length;
    }

    addDevice(selectedRoom, deviceType, deviceID) {
        // The ID is used for uniquely identifying device in 
        // the room. Currently, we assume devices only be added once in 
        // each rooom. So the problem is simpler. This will be changed 
        // later. 
        if (deviceID === undefined) {
            deviceID = selectedRoom + ":" + deviceID;
        }

        if (this.addedDevices.has(deviceID)) {
            // change device status
        } else {
            this.roomSetup.get(selectedRoom).push(deviceID);
            this.addedDevices.set(deviceID, {
                id: deviceID,
                postion: selectedRoom,
                type: deviceType,
                status: 0
            });
        }

        return {
            opt: "update",
            device: this.addedDevices.get(deviceID)
        };
    }

    removeDevice(selectedRoom, deviceType, deviceID) {

    }


    statusUpdate() {
        // change device status in the house
    }
}

module.exports = SmartHouse;