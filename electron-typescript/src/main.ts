import { app } from "electron";
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';
import HouseWindow from "./modules/house-window"
import { SystemTypes } from "./types/system-types";

const DefaultConfigFileName = "config.json";
const DefaultConfigPath = "";

/**
 * Main entrance of the app.
 */
class SmartHouseKeeper {

    private houseWindow!: HouseWindow;
    private appConfig!: SystemTypes.AppConfig;

    constructor() {
        this.loadSystemConfig();
        this.initMenu();
        this.initApp();
    }

    /**
     * Load app configuration from user system
     */
    private loadSystemConfig() {
        this.appConfig = {} as SystemTypes.AppConfig;
    }

    /**
     * Initialize the app menu
     */
    private initMenu() {

    }

    private initApp() {
        app.on('ready', () => {
            this.houseWindow = new HouseWindow(this.appConfig);
        });

        app.on('window-all-closed', () => {
            if (process.platform != 'darwin') {
                app.quit();
            }
        });
    }
}

new SmartHouseKeeper();
