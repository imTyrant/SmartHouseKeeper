"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
electron_1.app.on("ready", function () {
    var win = new electron_1.BrowserWindow({});
    win.loadURL("file://" + path.join(__dirname, "../asset/layout1/index.html"));
});
electron_1.app.on("window-all-closed", function () {
    if (process.platform != 'darwin') {
        electron_1.app.quit();
    }
});
//# sourceMappingURL=main-old.js.map