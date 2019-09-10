const {app} = require('electron');
const HouseWindow = require('./modules/house-window');
const SmartHouse = require('./modules/smart-house');
const EventGenerator = require('./modules/event-generator');
const AppSimulator = require('./modules/app-simulator');
const Walker = require('./modules/walker');

const path = require('path');
const os = require('os');
const fs = require('fs');

/**
 * Main entrance of the app.
 * Basic idea, may be changed. 
 */
class SmartHouseKeeper {
    constructor() {
        this.houseWindow = null;
        this.smartHouse = null;
        this.appSimulator = null
        this.eventGenerator = null;
    }

    init() {
        this.initApp();
    }

    initApp() {
        app.on('ready', () => {
            this.houseWindow = new HouseWindow();
        });

        app.on('window-all-closed', () => {
            if (process.platform != 'darwin') {
                app.quit();
            }
        });
    }
}

new SmartHouseKeeper().init()
