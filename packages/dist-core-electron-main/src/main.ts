import { app, BrowserWindow } from 'electron'
import * as path from 'path'

let win: BrowserWindow

async function createWindow(): Promise<void> {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(app.getAppPath(), 'preload.js'),
        },
    })

    win.loadFile(path.join(app.getAppPath(), 'renderer.html'))

    // rest of code..
}

app.on('ready', createWindow)
