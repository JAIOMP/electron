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
};

var player = function(name,MainTable){
	this.name = name;
	this.MainTable = MainTable;
}
var gameTable = new MainTable();
		console.log(gameTable);
