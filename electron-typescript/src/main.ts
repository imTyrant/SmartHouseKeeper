import { app, BrowserWindow } from "electron";
import * as path from 'path';

app.on("ready", () => {
    let win = new BrowserWindow({
        
    }); 
    win.loadURL(`file://${path.join(__dirname, "../asset/layout1/index.html")}`);
});

app.on("window-all-closed", () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
})