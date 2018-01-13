const greeter = require('./Greeter.js');
const other = require('./Other.js');
const imgBase = require('./ImgBase64.js');
const work = require('./demo_work.js');
require('../css/index.css')
document.querySelector("#root").appendChild(greeter());
document.querySelector("#root").appendChild(other());
// imgBase()
work()