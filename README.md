# fastv

Get the version of a program quickly.

## Installation
Install via npm:
```bash
npm install --save fastv
```
Install via git:
```bash
git clone https://github.com/juliandavidmr/fastv
```

## Examples
```js
var fastv = require("fastv");

fastv("vlc", function (err, version) {
    if(err) throw err;
    console.log(version);
    //=> 2.2.2
})
```

```js
fastv("sublimetext", function (err, version) {
    if(err) throw err;
    console.log(version);
    //=> 3126
})
```

```js
fastv("nodejs", function (err, version) {
    if(err) throw err;
    console.log(version);
    //=> 7.7.2
})
```

## Programs available
* Atom
* Audacity
* Cheese
* Firefox
* Gedit
* GoogleChrome
* Gnomecalculator
* Gimp
* Git
* Kazam
* LibreOffice
* Nemo
* NodeJS
* [NCU](https://www.npmjs.com/package/npm-check-updates)
* Shotwell
* Openshot
* OS                       
* Kernel                   
* Systemd
* Transmission
* Virtualbox
* VisualStudioCode
* Vlc
* Zenmap
* Zip
* [Zsh](https://github.com/robbyrussell/oh-my-zsh)

## Contributors

* [Julian David](https://github.com/juliandavidmr)


### _I accept any pull request_

## License
MIT