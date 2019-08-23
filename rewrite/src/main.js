const {app} = require('electron');
const HouseWindow = require('./js/house-window');
const SmartHouse = require('./js/smart-house');
const EventGenerator = require('./js/event-generator');
const AppSimulator = require('./js/app-simulator');
const Walker = require('./js/walker');

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
