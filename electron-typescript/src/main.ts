// import SmartHouse from "./modules/smart-house";
import SmartHouse from "./modules/smart-house"
import HouseWindow from "./modules/house-window"
import AppSimulator from "./modules/app-simulator";
import EventGenerator from "./modules/event-generator";

import {app} from "electron";

import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';

/**
 * Main entrance of the app.
 * Basic idea, may be changed. 
 */
class SmartHouseKeeper {

    private houseWindow!: HouseWindow;
    
    constructor() {
        this.houseWindow = new HouseWindow();
        // this.smartHouse = new SmartHouse(null);
        // this.appSimulator = null;
        // this.eventGenerator = null;
    }

    public init() {
        this.initApp();
    }

    private initApp() {
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
