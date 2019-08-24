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
            for (let each in this.rooms) {
                this.roomSetup.set(each, new Array());
            }
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
            deviceID = selectedRoom + "-" + deviceType;
        }

        if (this.addedDevices.has(deviceID)) {
            // change device status
        } else {
            this.roomSetup.get(selectedRoom).push(deviceID);
            this.addedDevices.set(deviceID, {
                id: deviceID,
                position: selectedRoom,
                type: deviceType,
                status: 0
            });
        }

        return {opt: "update", device: this.addedDevices.get(deviceID)};
    }

    removeDevice(selectedRoom, deviceType, deviceID) {
        if (deviceID === undefined) {
            deviceID = selectedRoom + "-" + deviceType;
        }

        if (this.addedDevices.has(deviceID)) {
            let device = this.addedDevices.get(deviceID);
            this.addedDevices.delete(deviceID);
            let index = this.roomSetup.get(selectedRoom).indexOf(deviceID);
            if (index !== -1) {
                this.roomSetup.get(selectedRoom).splice(index, 1);
            } else {
                // Throw error.
            }
            return {opt: "delete", device};
        } else {
            return {opt: "invalid", device: undefined}
        }
    }


    statusUpdate() {
        // change device status in the house
    }
}

module.exports = SmartHouse;