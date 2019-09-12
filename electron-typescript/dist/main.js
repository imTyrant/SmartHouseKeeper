"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var house_window_1 = require("./modules/house-window");
var electron_1 = require("electron");
// const {app} = require('electron');
var path = require('path');
var os = require('os');
var fs = require('fs');
/**
 * Main entrance of the app.
 * Basic idea, may be changed.
 */
var SmartHouseKeeper = /** @class */ (function () {
    // private smartHouse: SmartHouse;
    // private appSimulator: AppSimulator;
    // private eventGenerator: EventGenerator;
    function SmartHouseKeeper() {
        // this.houseWindow = new HouseWindow();
        // this.smartHouse = new SmartHouse(null);
        // this.appSimulator = null;
        // this.eventGenerator = null;
    }
    SmartHouseKeeper.prototype.init = function () {
        this.initApp();
    };
    SmartHouseKeeper.prototype.initApp = function () {
        var _this = this;
        electron_1.app.on('ready', function () {
            _this.houseWindow = new house_window_1.default();
        });
        electron_1.app.on('window-all-closed', function () {
            if (process.platform != 'darwin') {
                electron_1.app.quit();
            }
        });
    };
    return SmartHouseKeeper;
}());
new SmartHouseKeeper().init();
//# sourceMappingURL=main.js.map