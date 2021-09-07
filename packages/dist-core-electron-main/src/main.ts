import { app, BrowserWindow } from 'electron'
import { URL } from 'url'
import * as path from 'path'

let win: BrowserWindow

const devMode = process.env.NODE_ENV !== 'production'

const devPort = isNaN(Number(process.env.DEV_PORT))
    ? 3000
    : Number(process.env.DEV_PORT)
const devDomain = 'localhost'

const rendererPageName = 'renderer.html'

const devUrl = new URL(`http://${devDomain}:${String(devPort)}`)

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

    if (!devMode) {
        win.loadFile(path.join(app.getAppPath(), rendererPageName))
    } else {
        win.loadURL(devUrl.href)
    }

    // rest of code..
}

app.on('ready', createWindow)
