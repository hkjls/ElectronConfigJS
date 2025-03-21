const {app, BrowserWindow, protocol} = require('electron')
const url = require('url')
const path = require('path')

function createWindow () {
  // Create the browser window.
    let win = new BrowserWindow({
        title:'Electron App',
        width: 800,
        height: 600,
        webPreferences: {
        nodeIntegration: true
        }
    })
    const startUrl = url.format({
        pathname: path.join(__dirname,'..', '/public/index.html')
    })
  // and load the index.html of the app.
  // win.loadFile(startUrl)
  win.loadURL("http://localhost:5173")
}

app.whenReady().then(createWindow)