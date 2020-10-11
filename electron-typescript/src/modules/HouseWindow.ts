"use strict"
import SmartHouse from "./SmartHouse";
import * as path from "path";
import * as fs from "fs";
import { BrowserWindow, ipcMain, dialog } from "electron";
import EventGenerator from "./EventGenerator";
import { IPCChannel } from "../types/IPCChannel";
import { SystemTypes } from "../types/SystemTypes";

/**
 * This module is used for generate ui based on choice [optional].
 */
export class HouseWindow {
    private window!: BrowserWindow;

    constructor(config: SystemTypes.AppConfig) {
        this.init();
    }

    private init(): void {
        this.createWindow();
    }

    private createWindow(): void {
        this.window = new BrowserWindow({
            width: 1120,
            height: 800,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        });

        this.window.loadURL(`file://${path.join(__dirname, "../../dist/ui/index.html")}`);
        this.window.webContents.openDevTools();
    }
}