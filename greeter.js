var x = 1;
var y = 1;
var add = function(){
	return x+y;
};

var add_c = function(){
	this.x = 1;
	this.y = 1;
	this.add = function(){
		return (this.x+this.y);
	}
}

module.exports.x = x;
module.exports.y = y;
module.exports.add = add;

module.exports.addClass = add_c;