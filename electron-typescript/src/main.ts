// import SmartHouse from "./modules/smart-house";
import SmartHouse from "./modules/smart-house"
import HouseWindow from "./modules/house-window"
import AppSimulator from "./modules/app-simulator";
import EventGenerator from "./modules/event-generator";

import {app} from "electron";

// const {app} = require('electron');


const path = require('path');
const os = require('os');
const fs = require('fs');

/**
 * Main entrance of the app.
 * Basic idea, may be changed. 
 */
class SmartHouseKeeper {

    private houseWindow!: HouseWindow;
    // private smartHouse: SmartHouse;
    // private appSimulator: AppSimulator;
    // private eventGenerator: EventGenerator;

    constructor() {
        // this.houseWindow = new HouseWindow();
        // this.smartHouse = new SmartHouse(null);
        // this.appSimulator = null;
        // this.eventGenerator = null;
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
