console.log("channel.js loaded");
var channelIndex = 1;
showChannel(channelIndex);

function channel(n) {
	var channelTracker = channelIndex += n;
	showChannel(channelTracker);
	// console.log(channelTracker+" from channel");
}

function enterChannel(n) {
	showChannel(channelIndex = n);
}

function showChannel(n) {
	// var i;
	// var channels = document.getElementsByClassName("channel");
	if (n > 4) {
		channelIndex = 1
	}
	if (n < 1) {
		channelIndex = 4
	}
	// console.log(channelIndex + " in showChannel");
	// for (i = 0; i < channels.length; i++) {
	// 	channels[i].style.backgroundImage = url("https://media.giphy.com/media/OVlFjmEDhx9rG/giphy.gif"); 
	// }
	if (channelIndex == 1) {
		channelIndex = 1;
		document.getElementById("channelOne").style.backgroundImage="url('assets/images/traffic gif.gif')"
		document.getElementById("channelTwo").style.backgroundImage="url('assets/images/static.gif')"
		document.getElementById("channelThree").style.backgroundImage="url('assets/images/static.gif')"
		document.getElementById("channelFour").style.backgroundImage="url('assets/images/static.gif')"
	}

	if (channelIndex == 2) {
		channelIndex = 2;
		document.getElementById("channelOne").style.backgroundImage="url('assets/images/static.gif')"
		document.getElementById("channelTwo").style.backgroundImage="url('assets/images/lightning.gif')"
		document.getElementById("channelThree").style.backgroundImage="url('assets/images/static.gif')"
		document.getElementById("channelFour").style.backgroundImage="url('assets/images/static.gif')"
	}

	if (channelIndex == 3) {
		channelIndex = 3;
		document.getElementById("channelOne").style.backgroundImage="url('assets/images/static.gif')"
		document.getElementById("channelTwo").style.backgroundImage="url('assets/images/static.gif')"
		document.getElementById("channelThree").style.backgroundImage="url('assets/images/ezgif.com-crop.gif')"
		document.getElementById("channelFour").style.backgroundImage="url('assets/images/static.gif')"
	}

	if (channelIndex == 4) {
		channelIndex = 4;
		document.getElementById("channelOne").style.backgroundImage="url('assets/images/static.gif')"
		document.getElementById("channelTwo").style.backgroundImage="url('assets/images/static.gif')"
		document.getElementById("channelThree").style.backgroundImage="url('assets/images/static.gif')"
		document.getElementById("channelFour").style.backgroundImage="url('assets/images/ezgif.com-optimize.gif')"
	}

}

function spawner() {
	console.log("Spawning")
	var newBox = document.createElement("div");
	newBox.className = "spawnedBox";
	document.getElementById("spawner").appendChild(newBox);
}

function resetRowThree() {
	deleteSpawns();
}

function deleteSpawns() {
	var spawns = document.getElementById("spawner");
	while (spawns.firstChild) {
		spawns.removeChild(spawns.firstChild);
	}
}

var wavyaction = 1;

function wavy() {
	if (wavyaction == 1) {
		document.body.style.backgroundColor = "red";
		document.body.style.animation = ""
		wavyaction = 2;
		wavierAction = 1;
	} else {
		wavyaction = 1;
		document.body.style.backgroundColor = "#fff5e6";
	}
}


var wavierAction = 1;
function wavier() {
	if (wavierAction == 1) {
		document.body.style.animation = "shifty 5s linear infinite";
		wavierAction = 2;
		wavyaction = 1
	} else {
		wavierAction = 1;
		document.body.style.animation = "";
		document.body.style.backgroundColor = "#fff5e6";
	}
}

function printHo(){
	window.print();
}

function getOut() {
	window.open();
}

function lie() {
	window.prompt("Would I lie to you? Y or N?");
}

function woosh() {
	window.confirm();
}

function fire() {
	window.alert("Run there's a fire!");
}

function windowClose() {
	myWindow.close();
}


// var bigBox = false;
// var boxes = document.getElementsByClassName("box");
// function biggerBoxes() {
// 	if (bigBox == false) {
// 		boxes.style.width="25%";
// 		bigBox = true;
// 	} else {
// 		boxes.style.width="15vw";
// 	}
// }

function reload() {
	location.reload();
}







