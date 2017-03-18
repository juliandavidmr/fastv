var fastv = require("../");

fastv("NPM", function (err, version) {
    if(err) throw err;
    console.log("Version:", version);
})