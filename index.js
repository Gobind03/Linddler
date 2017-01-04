const electron = require('electron')
var express = require('express')
const {app, BrowserWindow} = electron

app.on('ready', () => {
    let win = new BrowserWindow({width:1300, height: 1000})
    win.loadURL(`file://${__dirname}/src/index.html`)
});