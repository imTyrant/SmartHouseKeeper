const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var windows = null;

function createWindow() {
    mainWin = new BrowserWindow({
        width: 800,
        height: 600,
        nodeIntegration: true
    });

    mainWin.loadFile('index.html')

    mainWin.on('closed', () => {
        mainWin = null
    })
}

app.on('ready', createWindow);