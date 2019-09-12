"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_simulator_1 = require("./app-simulator");
var house_detail_1 = require("../config/house-detail");
var queue_1 = require("../utils/queue");
var SmartHouse = /** @class */ (function () {
    function SmartHouse(config) {
        this.rooms = house_detail_1.default.room;
        this.devices = house_detail_1.default.device;
        this.appSimulator = new app_simulator_1.default(config);
        // The queue is for temporarily storing unhandled events.
        this.eventBuffer = new queue_1.default();
        if (config === null) {
            // devices added in room
            // [room id]->[devices]
            this.roomSetup = new Map();
            for (var each in this.rooms) {
                this.roomSetup.set(each, new Array());
            }
            // devices' status 
            // [devices id] -> [status]
            this.addedDevices = new Map();
            // smart things app added
            // [room]-> [devices]
            this.app = [];
        }
        else {
            // parse config;
        }
    }
    Object.defineProperty(SmartHouse.prototype, "addedDevicesNum", {
        get: function () {
            return this.addedDevices.length;
        },
        enumerable: true,
        configurable: true
    });
    SmartHouse.prototype.addDevice = function (selectedRoom, deviceType, deviceID) {
        /**
         * The ID is used for uniquely identifying device in the
         * room. Currently, we assume devices only be added once in
         * each room. So the problem is simpler. This will be changed
         * later.
         */
        if (deviceID === undefined) {
            deviceID = selectedRoom + "-" + deviceType;
        }
        if (this.addedDevices.has(deviceID)) {
            // change device status
        }
        else {
            this.roomSetup.get(selectedRoom).push(deviceID);
            this.addedDevices.set(deviceID, {
                id: deviceID,
                position: selectedRoom,
                type: deviceType,
                status: 0
            });
        }
        return { opt: "update", device: this.addedDevices.get(deviceID) };
    };
    SmartHouse.prototype.removeDevice = function (selectedRoom, deviceType, deviceID) {
        if (deviceID === undefined) {
            deviceID = selectedRoom + "-" + deviceType;
        }
        if (this.addedDevices.has(deviceID)) {
            var device = this.addedDevices.get(deviceID);
            this.addedDevices.delete(deviceID);
            var index = this.roomSetup.get(selectedRoom).indexOf(deviceID);
            if (index !== -1) {
                this.roomSetup.get(selectedRoom).splice(index, 1);
            }
            else {
                // Throw error.
            }
            return { opt: "delete", device: device };
        }
        else {
            return { opt: "invalid", device: undefined };
        }
    };
    SmartHouse.prototype.eventHandler = function (event) {
        /**
         * Change device status in the house.
         * {
         *   location
         *   motion
         *   temperature
         *   humidity
         *   illumination
         *   smoke
         *   leakage
         *   switch
         *   lock
         *   time
         *   mode
         * }
         */
        this.appSimulator.parseEvent();
    };
    return SmartHouse;
}());
exports.default = SmartHouse;
//# sourceMappingURL=smart-house.js.map