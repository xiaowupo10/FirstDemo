const greeter = require('./Greeter.js');
const other = require('./Other.js');
require('../css/index.css')
document.querySelector("#root").appendChild(greeter());
document.querySelector("#root").appendChild(other());