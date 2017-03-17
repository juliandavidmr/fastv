const execFile = require('child_process').execFile;

module.exports = function (program, version, cb) {
  // console.log("Ejecutando: ", program, version)
  return execFile(program, [version], (error, stdout, stderr) => {
    if (error) {
      // throw error;
      return cb(error);
    }
    return cb(null, stdout)
  });
}