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
exports.gedit = {
    program: "gedit",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: false,
    mac: false
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
exports.libreoffice = {
    program: "libreoffice",
    version: " --version",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.node = {
    program: "node",
    version: "-v",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.nodejs = this.node;
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
exports.shotwell = {
    program: "shotwell",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: false,
    mac: false
};
exports.zenmap = {
    program: "zenmap",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: false
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
exports.kazam = {
    program: "kazam",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: false,
    mac: false
};
exports.audacity = {
    program: "audacity",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.vlc = {
    program: "vlc",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.openshot = {
    program: "openshot",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.zsh = {
    program: "zsh",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: false,
    mac: true
};
exports.ohmyzsh = this.zsh;
exports.systemd = {
    program: "systemd",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: false,
    mac: false
};
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
exports.nemo = {
    program: "nemo",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: false,
    mac: false
};
exports.nemoexplorer = this.nemo;
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
exports.git = {
    program: "git",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.github = this.git;
exports.heroku = {
    program: "heroku",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: true,
    mac: true
};
exports.hero = this.heroku;
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
exports.emacs = {
    program: "emacs",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: true,
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
exports.unity = {
    program: "unity",
    version: "--version",
    regex: regex_generic,
    linux: true,
    windows: false,
    mac: false
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