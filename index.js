var ipc = require('ipc');
// var button = document.getElementById('progress');
var interval = function() {
	var count = 0;
	var progress = setInterval(function(){
		if (count<1) {
			ipc.send('update-progress',count);
			count += 0.1;
			console.log(count);
		}
		else{
		ipc.send('update-progress',0);
		clearInterval(progress);
		}
	},1000);
}
ipc.on('ping',function(message){
	console.log(message)
})

// var ipc = require('ipc');
// var button = document.getElementById('start-progress');
// button.onclick = function() {
//   var counter = 0;
//   // increment the progress value by 0.1 every second
//   var progress = setInterval(function() {
//     if (counter < 1) {
//       ipc.send('update-progress', counter);
//       counter += 0.1;
//     }
//     else {
//       // reset the progress value to 0;
//       ipc.send('update-progress', 0);
//       // clear out the set interval
//       clearInterval(progress);
//     }
//   }, 1000);
// };