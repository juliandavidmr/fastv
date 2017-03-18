var fastv = require("../");

fastv("g++", function (err, version) {
    if(err) throw err;
    console.log("Version:", version);
})