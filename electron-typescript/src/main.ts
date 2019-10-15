import { app } from "electron";
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';
import { HouseWindow } from "./modules/HouseWindow"
import { SystemTypes } from "./types/system-types";
import SmartHouse from "./modules/SmartHouse";

const DefaultConfigFileName = "config.json";
const DefaultConfigFilePath = "";
const DefaultConfig: SystemTypes.AppConfig = {}

/**
 * Main entrance of the app.
 */
class SmartHouseKeeper {
    private smartHouse!: SmartHouse;
    private houseWindow!: HouseWindow;
    private appConfig!: SystemTypes.AppConfig;

    constructor() {
        this.loadSystemConfig();
        this.initMenu();
        this.initApp();
    }

    /**
     * Load app configuration of user, or take the default Config
     */
    private loadSystemConfig(): void {
        this.appConfig = DefaultConfig;
    }

    /**
     * Initialize the app menu
     */
    private initMenu(): void {

    }

    private initApp(): void {
        this.smartHouse = new SmartHouse(this.appConfig);

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
