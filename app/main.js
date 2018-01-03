const greeter = require('./Greeter.js');
const other = require('./Other.js');
document.querySelector("#root").appendChild(greeter());
document.querySelector("#root").appendChild(other());