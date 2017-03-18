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

      execVersion(program.regex, program.program, program.version, function (err, version) {
        return cb(err, version);
      });
    } else {
      execVersion(keys.regex_generic, program_name, "--version", function (err, version) {
        if (err) {
          execVersion(keys.regex_generic, program_name, "-v", function (err, version) {
            if (err) {
              return cb("Program not available");
            } else {
              return cb(null, version);
            }
          });
        } else {
          return cb(null, version);
        }
      });
      // return cb("Program not available");
    }
  } else {
    throw "Program param not found";
  }
}

function execVersion(regex, program_name, version, cb) {
  exec(program_name, version, function (err, output) {
    return cb(err, getVersion(regex, output));
  });
}

function getVersion(regex, stdout) {
  var version = "None";
  version = regex.exec(stdout);
  if (version) {
    version = version[0];
  }
  return version;
}