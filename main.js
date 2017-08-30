var greeter = require('./greeter.js');
greeter.x = 2;
greeter.y = 3;
console.log(greeter.add());

var add_c = new greeter.addClass();
add_c.x = 2;
add_c.y = 3;
console.log(add_c.add())