"use strict"
// import * as IPCChannel from "../config/ipc-channel";
import SmartHouse from "./smart-house";
import * as path from "path";
import * as fs from "fs";
import {BrowserWindow, ipcMain, dialog} from "electron";
import EventGenerator from "./event-generator";
import {default as IPCChannel} from "../config/ipc-channel";

/**
 * This module is used for generate ui based on choice [optional].
 */
export default class HouseWindow {
    private config: any;
    private smartHouse: SmartHouse;
    private eventGenerator: EventGenerator;
    private window!: BrowserWindow;

    constructor() {
        this.config = null;
        this.smartHouse = new SmartHouse(this.config);
        this.eventGenerator = new EventGenerator(this.config);
        this.init();
    }

    createWindow() {
        this.window = new BrowserWindow({
            width: 1200,
            height: 600,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: false
                // ,
                // preload: path.join(__dirname, "preload.js")
            }
        });

        this.window.loadURL(`file://${path.join(__dirname, "../../asset/layout1/index.html")}`);
        this.window.webContents.openDevTools();
    }

    init() {
        this.createWindow();
        ipcMain.on("pick-file-path", () => this.pickSavePath());
        ipcMain.on(IPCChannel.RENDERER_DEVICE_ADD, (event, args) => this.onAddDevice(event, args));
        ipcMain.on(IPCChannel.RENDERER_DEVICE_REMOVE, (event, args) => this.onRemoveDevice(event, args));
        ipcMain.on(IPCChannel.RENDERER_POSITION_CHANGED, (event, args) => this.onPositionChanged(event, args))
    }
    
    pickSavePath() {
        let option: Electron.SaveDialogOptions = {
            title: "log",
            filters: [
                {name: "txt", extensions:["txt"]}
            ]
        };

        dialog.showOpenDialog(option, (file: any) => {
            if (file) {
                this.window.webContents.send("file-path-selected", file);
            }
        });
    }

    onAddDevice(event: any, args: any) {
        let result = this.smartHouse.addDevice(args.selectedRoom, args.deviceType, args.deviceID);
        this.window.webContents.send(IPCChannel.RENDERER_DEVICE_UPDATE, result);
    }

    onRemoveDevice(event: any, args: any) {
        let result = this.smartHouse.removeDevice(args.selectedRoom, args.deviceType, args.deviceID);
        this.window.webContents.send(IPCChannel.RENDERER_DEVICE_UPDATE, result);
    }

    onPositionChanged(e: any, args: any) {
        /**
         * Generate event,
         * then pass the generated event to the smart house.
         */
        let event = this.eventGenerator.happen(args.position, args.device);
        this.smartHouse.eventHandler(event);
    }
}