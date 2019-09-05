"use strict"
const IPCChannel = require('../configure/ipc-channel');
const SmartHouse = require('./smart-house');
const EventGenerator = require('./event-generator');

const path = require('path');
const fs = require('fs');
const {BrowserWindow, ipcMain, dialog} = require('electron');

/**
 * This module is used for generate ui based on choice [optional]. 
 */
class HouseWindow {
    constructor () {
        this.config = null;
        this.smartHouse = new SmartHouse(config);
        this.eventGenerator = new EventGenerator(config);
        this.init();
    }

    createWindow() {
        this.window = new BrowserWindow({
            width: 1200,
            height: 600,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: false,
                preload: path.join(__dirname, "preload.js")
            }
        });

        this.window.loadURL(`file://${path.join(__dirname, "../../app/index.html")}`);
        this.window.webContents.openDevTools();
    }

    init() {
        this.createWindow();
        ipcMain.on('pick-file-path', () => this.pickSavePath());
        
        ipcMain.on(IPCChannel.RENDERER_DEVICE_ADD, (event, args) => this.onAddDevice(event, args));
        ipcMain.on(IPCChannel.RENDERER_DEVICE_REMOVE, (event, args) => this.onRemoveDevice(event, args));
        ipcMain.on(IPCChannel.RENDERER_POSITION_CHANGED, (event, args) => this.onPositionChanged(event, args))
    }
    
    pickSavePath() {
        let option = {
            title: 'log',
            filter: [
                {name: 'txt', extensions:['txt']}
            ]
        };

        dialog.showSaveDialog(option, (file) => {
            if (file) {
                this.window.webContents.send('file-path-selected', file);
            }
        }) 
    }

    onAddDevice(event, args) {
        let result = this.smartHouse.addDevice(args.selectedRoom, args.deviceType, args.deviceID);
        this.window.webContents.send(IPCChannel.RENDERER_DEVICE_UPDATE, result);
    }

    onRemoveDevice(event, args) {
        let result = this.smartHouse.removeDevice(args.selectedRoom, args.deviceType, args.deviceID);
        this.window.webContents.send(IPCChannel.RENDERER_DEVICE_UPDATE, result);
    }

    onPositionChanged(e, args) {
        /**
         * Generate event,
         * the pass the generated event to the smart house.
         */
        let event = this.eventGenerator.happen(args.position, args.device);
        this.smartHouse.eventHappen(event);
    }
}


module.exports = HouseWindow;