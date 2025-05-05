const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

function createWindow() {
  // Crée une fenêtre de navigateur
  const {width, height} = screen.getPrimaryDisplay().workAreaSize
  const win = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Charge le fichier index.html dans la fenêtre Electron
  win.loadFile(path.join(__dirname,'app','dist','index.html'));
  // win.loadFile(path.join(__dirname, 'public', 'index.html'))
  console.log("FILE:", path.join(__dirname,'app','dist','index.html'))
  // win.webContents.openDevTools();
  // win.loadURL("http://localhost:5173/")
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
