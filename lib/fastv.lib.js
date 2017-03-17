var os = require("./os");
var exec = require("./exec");
var keys = require("./keys");

/**
 * @param {string} program_name
 * @param {funcion} cb
 */
module.exports = function (program_name, cb) {
  if (program_name) {
    program_name = program_name.toLowerCase();

    var program = keys[program_name];
    if (program) {
      if (os.isLinux() && !program.linux) {
        return cb("Program not available in linux");
      }
      if (os.isWin() && !program.windows) {
        return cb("Program not available in ms windows");
      }
      if (os.isMac() && !program.mac) {
        return cb("Program not available in mac os");
      }

      exec(program.program, program.version, function (err, output) {
        var version = "0";
        version = program.regex.exec(output);
        return cb(err, version[0]);
      });
    } else {
      return cb("Program not available");
    }
  } else {
    throw "Program param not found";
  }
}