"use strict"
const IPCChannel = require('../configure/ipc-channel');
const SmartHouse = require('./smart-house');

const path = require('path');
const fs = require('fs');
const {BrowserWindow, ipcMain, dialog} = require('electron');

/**
 * May be this module is used for generate ui
 * based on choice 
 */
class HouseWindow {
    constructor () {
        this.smartHouse = null;
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
        })

        this.window.loadURL(`file://${path.join(__dirname, "../../app/index.html")}`);
        this.window.webContents.openDevTools();
    }

    init() {
        this.smartHouse = new SmartHouse();
        
        this.createWindow();

        ipcMain.on('pick-file-path', () => this.pickSavePath());
        ipcMain.on(IPCChannel.RENDERER_DEVICE_ADD, this.addDevice);
        ipcMain.on(IPCChannel.RENDERER_DEVICE_REMOVE, this.removeDevice);
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
        console.log(args);
    }
}


module.exports = HouseWindow;