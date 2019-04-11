const os = require('os');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const dialog = electron.dialog;
const ipcMain = electron.ipcMain;

ipcMain.on('pick-file-path', (event) => {
    var option = {
        title: 'log',
        filter: [
            {name: 'txt', extensions:['txt']}
        ]
    };
    dialog.showSaveDialog(option, (file) => {
        if (file) {
            event.sender.send('file-path-selected', file);
        }
    })
});

function createWindow() {
    mainWin = new BrowserWindow({
        width: 1200,
        height: 600,
        nodeIntegration: true
    });

    mainWin.loadFile('index.html');

    mainWin.on('closed', () => {
        mainWin = null
    });
}

function quit() {
    if (process.platform != 'darwin') {
        app.quit();
    }
}

app.on('ready', createWindow);
app.on("window-all-closed", quit);