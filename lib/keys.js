"use strict";
var regex_generic = /([0-9.,-]{2,})/
var exec = require("./exec");
exports.regex_generic = regex_generic; // Only configurations

exports.atom = {
    program: "atom",
    version: "-v",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.firefox = {
    program: "firefox",
    version: "-v",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.googlechrome = {
    program: "google-chrome",
    version: "-v",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.google = this.googlechrome;
exports.visualcode = {
    program: "code",
    version: "-v",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.visualstudiocode = this.visualcode;
exports.gnomecalculator = {
    program: "gnome-calculator",
    version: "-v",
    regex: regex_generic,
    linux: true,
    windows: false,
    mac: false
};
exports.virtualbox = {
    program: "vboxmanage",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.vbox = this.virtualbox;
exports.gimp = {
    program: "gimp",
    version: "-v",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.transmission = {
    program: "transmission-gtk",
    version: "-v",
    regex: regex_generic,
    linux: true,
    windows: false,
    mac: false
};
exports.sublimetext = {
    program: "subl",
    version: "-v",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.subl = this.sublimetext;
exports.sublime = this.sublimetext;
exports.system = {
    program: "lsb_release",
    version: "-a",
    regex: regex_generic,
    linux: true,
    windows: false,
    mac: false
};
exports.so = this.system;
exports.os = this.system;
exports.systemoperative = this.system;
exports.kernel = {
    program: "uname",
    version: "-mrs",
    regex: regex_generic,
    linux: true,
    windows: false,
    mac: false
};
exports.kernellinux = this.kernel;
exports.linux = this.kernel;
exports.kernelinux = this.kernel;
exports.kernelversion = this.kernel;
exports.cheese = {
    program: "cheese",
    version: "-v",
    regex: regex_generic,
    linux: true,
    windows: false,
    mac: false
};
exports.zip = {
    program: "zip",
    version: "-v",
    regex: regex_generic,
    linux: true,
    windows: false,
    mac: false
};
exports.npm = {
    program: "npm",
    version: "-v",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.java = {
    program: "java",
    version: "-version",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.javac = {
    program: "javac",
    version: "-version",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.python = {
    program: "python",
    version: "-V",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: false
};