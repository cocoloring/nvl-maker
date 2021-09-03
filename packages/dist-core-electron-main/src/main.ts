import { app, BrowserWindow } from 'electron'
import { URL } from 'url'
import * as path from 'path'

let win: BrowserWindow

const devPort = 9966
const devDomain = 'localhost'

const devUrl = new URL(`http://${devDomain}:${devPort}/`)

console.log(devUrl.href)

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

    console.log(process.env.NODE_ENV)

    if (process.env.NODE_ENV === 'production') {
        win.loadFile(path.join(app.getAppPath(), 'renderer.html'))
    } else {
        win.loadURL(devUrl.href)
    }

    // rest of code..
}

app.on('ready', createWindow)
