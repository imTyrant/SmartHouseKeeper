import { app, Cookies } from "electron";
import * as figlet from 'figlet';
import chalk from 'chalk';
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';
import { HouseWindow } from "./modules/HouseWindow"
import { SystemTypes } from "./types/SystemTypes";
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

// Just for fun.
const smart = figlet.textSync("Smart", {font: "Isometric1"});
const house = figlet.textSync("House", {font: "Isometric1"});
const keeper = figlet.textSync("Keeper", {font: "Isometric1"});
console.log(chalk.blue(smart), chalk.green(house), chalk.red(keeper));

// Let's go back main mission.
new SmartHouseKeeper();
