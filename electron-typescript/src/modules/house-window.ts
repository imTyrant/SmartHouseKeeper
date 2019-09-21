"use strict"
import SmartHouse from "./smart-house";
import * as path from "path";
import * as fs from "fs";
import { BrowserWindow, ipcMain, dialog } from "electron";
import EventGenerator from "./event-generator";
import { IPCChannel } from "../types/ipc-channel";
import { SystemTypes } from "../types/system-types";

/**
 * This module is used for generate ui based on choice [optional].
 */
export class HouseWindow {
    private config!: SystemTypes.AppConfig;
    private smartHouse: SmartHouse;
    private eventGenerator: EventGenerator;
    private window!: BrowserWindow;

    constructor(config: SystemTypes.AppConfig) {
        this.config = config;
        this.smartHouse = new SmartHouse(this.config);
        this.eventGenerator = new EventGenerator(this.config);
        this.init();
    }

    private init(): void {
        this.createWindow();
        ipcMain.on("pick-file-path", () => this.pickSavePath()); // To be discarded.
    }

    private createWindow(): void {
        this.window = new BrowserWindow({
            width: 1120,
            height: 800,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: false
            }
        });

        this.window.loadURL(`file://${path.join(__dirname, "../../dist/ui/index.html")}`);
        this.window.webContents.openDevTools();
    }

    private pickSavePath(): void {
        let option: Electron.SaveDialogOptions = {
            title: "log",
            filters: [
                { name: "txt", extensions: ["txt"] }
            ]
        };

        dialog.showOpenDialog(option, (file: any) => {
            if (file) {
                this.window.webContents.send("file-path-selected", file);
            }
        });
    }
}