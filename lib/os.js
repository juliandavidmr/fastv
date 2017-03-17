var os = require("os");
var osss = os.platform();

module.exports.isWin = function () { 
    return osss == "win32";
}

module.exports.isLinux = function () { 
    return osss == "linux";
}

module.exports.isMac = function () { 
    return osss == "darwin";
}