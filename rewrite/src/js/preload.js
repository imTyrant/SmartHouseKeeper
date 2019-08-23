"use strict"
const {ipcRenderer} = require('electron');
const path = require('path');
const crypto = require('crypto');

const HouseDetail = require(path.join(__dirname, "../../app/js/house-detail.js"));
const Channel = require('../configure/ipc-channel');

process.once('loaded', () => {
    global.room = HouseDetail.room;
    global.device = HouseDetail.device;
    global.ipcRenderer = ipcRenderer;
    global.Channel = Channel;
    global.md5 = crypto.createHash("md5");
})