const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;
const indexpage = `file://${__dirname}/interface/index/index.html`;

require("electron-reload")(__dirname, {
    electron: path.join(__dirname, '..', 'node_modules', '.bin', 'electron')
});

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadURL(indexpage);
});
