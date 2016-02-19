var lodash = require("lodash");
var MainTable = function() {
	for (var i = 65; i < 74; i++) {
		this[String.fromCharCode(i)] = (function makeArray(){
			var numbers = [];
			for (var j = 1; j < 10; j++) {
				numbers.push(j);
			}
			return numbers;
		})();
	}
	this.usedCoordinates = [];
};

var player = function(name,MainTable){
	this.name = name;
	this.MainTable = MainTable;
}
var gameTable = new MainTable();

var between = lodash.random(2,5);
console.log(between);


	
