"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as IPCChannel from "../config/ipc-channel";
var smart_house_1 = require("./smart-house");
var path = require("path");
var electron_1 = require("electron");
var event_generator_1 = require("./event-generator");
var ipc_channel_1 = require("../types/ipc-channel");
/**
 * This module is used for generate ui based on choice [optional].
 */
var HouseWindow = /** @class */ (function () {
    function HouseWindow() {
        this.config = null;
        this.smartHouse = new smart_house_1.default(this.config);
        this.eventGenerator = new event_generator_1.default(this.config);
        this.init();
    }
    HouseWindow.prototype.createWindow = function () {
        this.window = new electron_1.BrowserWindow({
            width: 1200,
            height: 600,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: false
                // ,
                // preload: path.join(__dirname, "preload.js")
            }
        });
        this.window.loadURL("file://" + path.join(__dirname, "../../dist/ui/index.html"));
        this.window.webContents.openDevTools();
    };
    HouseWindow.prototype.init = function () {
        var _this = this;
        this.createWindow();
        electron_1.ipcMain.on("pick-file-path", function () { return _this.pickSavePath(); });
        electron_1.ipcMain.on(ipc_channel_1.default.RENDERER_DEVICE_ADD, function (event, args) { return _this.onAddDevice(event, args); });
        electron_1.ipcMain.on(ipc_channel_1.default.RENDERER_DEVICE_REMOVE, function (event, args) { return _this.onRemoveDevice(event, args); });
        electron_1.ipcMain.on(ipc_channel_1.default.RENDERER_POSITION_CHANGED, function (event, args) { return _this.onPositionChanged(event, args); });
    };
    HouseWindow.prototype.pickSavePath = function () {
        var _this = this;
        var option = {
            title: "log",
            filters: [
                { name: "txt", extensions: ["txt"] }
            ]
        };
        electron_1.dialog.showOpenDialog(option, function (file) {
            if (file) {
                _this.window.webContents.send("file-path-selected", file);
            }
        });
    };
    HouseWindow.prototype.onAddDevice = function (event, args) {
        var result = this.smartHouse.addDevice(args.selectedRoom, args.deviceType, args.deviceID);
        this.window.webContents.send(ipc_channel_1.default.RENDERER_DEVICE_UPDATE, result);
    };
    HouseWindow.prototype.onRemoveDevice = function (event, args) {
        var result = this.smartHouse.removeDevice(args.selectedRoom, args.deviceType, args.deviceID);
        this.window.webContents.send(ipc_channel_1.default.RENDERER_DEVICE_UPDATE, result);
    };
    HouseWindow.prototype.onPositionChanged = function (e, args) {
        /**
         * Generate event,
         * then pass the generated event to the smart house.
         */
        var event = this.eventGenerator.happen(args.position, args.device);
        this.smartHouse.eventHandler(event);
    };
    return HouseWindow;
}());
exports.default = HouseWindow;
//# sourceMappingURL=house-window.js.map