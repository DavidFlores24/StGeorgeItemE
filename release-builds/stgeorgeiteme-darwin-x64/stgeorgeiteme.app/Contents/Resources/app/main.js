// JavaScript Document
const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

app.on('ready', function() {
	mainWindow = new BrowserWindow({
		backgroundColor:'#13375c',
		width: 1245,
		height: 700
	});
	
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));
});