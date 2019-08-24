"use strict"
const IPCChannel = require('../configure/ipc-channel');
const SmartHouse = require('./smart-house');

const path = require('path');
const fs = require('fs');
const {BrowserWindow, ipcMain, dialog} = require('electron');

/**
 * This module is used for generate ui based on choice [optional]. 
 */
class HouseWindow {
    constructor () {
        this.smartHouse = new SmartHouse();
        this.config = null;
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
        
        ipcMain.on(IPCChannel.RENDERER_DEVICE_ADD, (event, args) => this.addDevice(event, args));
        ipcMain.on(IPCChannel.RENDERER_DEVICE_REMOVE, (event, args) => this.removeDevice(event, args));
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

    addDevice(event, args) {
        let result = this.smartHouse.addDevice(args.selectedRoom, args.deviceType, args.deviceID);
        this.window.webContents.send(IPCChannel.RENDERER_DEVICE_UPDATE, result);
    }

    removeDevice(event, args) {
        let result = this.smartHouse.removeDevice(args.selectedRoom, args.deviceType, args.deviceID);
        this.window.webContents.send(IPCChannel.RENDERER_DEVICE_UPDATE, result);
    }
    
}


module.exports = HouseWindow;