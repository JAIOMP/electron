'use strict';

// const electron = require('electron');
// // Module to control application life.
// const app = electron.app;
// // Module to create native browser window.
// const BrowserWindow = electron.BrowserWindow;

// // Keep a global reference of the window object, if you don't, the window will
// // be closed automatically when the JavaScript object is garbage collected.
// let mainWindow;

// function createWindow () {
//   // Create the browser window.
//   mainWindow = new BrowserWindow({width: 800, height: 600});

//   // and load the index.html of the app.
//   mainWindow.loadURL('file://' + __dirname + '/index.html');

//   // Open the DevTools.
//   mainWindow.webContents.openDevTools();

//   // Emitted when the window is closed.
//   mainWindow.on('closed', function() {
//     // Dereference the window object, usually you would store windows
//     // in an array if your app supports multi windows, this is the time
//     // when you should delete the corresponding element.
//     mainWindow = null;
//   });
// }

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// app.on('ready', createWindow);

// // Quit when all windows are closed.
// app.on('window-all-closed', function () {
//   // On OS X it is common for applications and their menu bar
//   // to stay active until the user quits explicitly with Cmd + Q
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', function () {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (mainWindow === null) {
//     createWindow();
//   }
// });
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var ipc = require('electron').ipcMain;

// var mainWindow;
// var createWindow = function() {
//   mainWindow = new BrowserWindow({width: 800,height: 600});
//   mainWindow.loadURL('file://'+__dirname + '/index.html');
//   mainWindow.webContents.openDevTools();
//   mainWindow.on('closed',function(){
//     mainWindow = null;
//   });
// }
var window = null;
// app.on('ready',createWindow);
app.on('ready',function(){
    window = new BrowserWindow({width: 1000,height:800});
    window.loadURL('file://'+__dirname + '/index.html');
    window.webContents.openDevTools();
    window.webContents.on('did-finish-load',function(){
    window.webContents.send('ping','hi friend!');
    })
})

// ipc.on('update-progress',function(event,arg){
//   if(process.platform==='darwin'){
//     window.setProgressBar(arg);
//   }
// })
// app.on('window-all-closed',function() {
//   if(process.platform!=='darwin'){
//     app.quit();
//   }
// });

// app.on('activate',function() {
//   if(mainWindow === null){
//     createWindow();
//   }
// });
