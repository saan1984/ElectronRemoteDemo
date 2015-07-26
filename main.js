var application = require('app'),
    BrowserWindow = require('browser-window');
application.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 600,
        height: 300,
        center:true,
        title:"Electron Remote Menu",
    });
    mainWindow.loadUrl('file://' + __dirname + '/main.html');
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});