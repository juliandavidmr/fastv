var fastv = require("../");

fastv("kernel", function (err, version) {
    if(err) throw err;
    console.log("Version:", version);
})