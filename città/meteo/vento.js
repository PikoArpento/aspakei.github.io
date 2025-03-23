// 🔴 Rimuove gli elementi meteo precedenti
document.querySelectorAll("#containerLeaf").forEach(el => el.remove());

// 🔵 Crea il nuovo effetto vento con foglie
const leafContainer = document.createElement("div");
leafContainer.id = "containerLeaf";
leafContainer.classList.add("weather-element");

document.body.appendChild(leafContainer);


var container = document.getElementById("containerLeaf");
var telaInteira = window.innerWidth;

function logzin() {
	telaInteira = window.innerWidth;
}

setInterval(logzin, 1000);

function createLeaf() {
	var leaf = document.createElement("div");
	leaf.innerHTML =
		'<img src="https://art.pixilart.com/sr20867d214926b.png">';

	leaf.classList.add("leaf");
	leaf.style.left = Math.random() * telaInteira + "px";
	container.appendChild(leaf);
}

setInterval(createLeaf, 100);

var windStrength = 1;

var windDirection = 1;

function updateLeafPosition(leaf) {
	leaf.style.top =
		parseInt(leaf.style.top) + windDirection * windStrength + "px";
	leaf.style.left =
		parseInt(leaf.style.left) + windDirection * windStrength + "px";

	if (parseInt(leaf.style.top) > window.innerHeight) {
		leaf.remove();
	}
}

setInterval(function () {
	var leaves = document.querySelectorAll(".leaf");
	for (var i = 0; i < leaves.length; i++) {
		updateLeafPosition(leaves[i]);
	}
}, 10);

document.addEventListener("mousemove", (event) => {
	var metadeTela = window.innerWidth / 2;
	var xdomouse = event.pageX;
	if (xdomouse > metadeTela) {
		windDirection = 1;
	} else {
		windDirection = -1;
	}
});

document.addEventListener("mousemove", (event2) => {
	var metadeTela = window.innerWidth / 2;
	var xdomouse2 = event2.pageX;
	if (xdomouse2 > metadeTela && xdomouse2 < metadeTela + 300) {
		windStrength = 1;
	} else if (xdomouse2 > metadeTela + 300 && xdomouse2 < metadeTela + 600) {
		windStrength = 2;
	} else if (xdomouse2 > metadeTela + 600) {
		windStrength = 3;
	} else if (xdomouse2 < metadeTela && xdomouse2 > metadeTela - 300) {
		windStrength = 1;
	} else if (xdomouse2 < metadeTela - 300 && xdomouse2 > metadeTela - 600) {
		windStrength = 2;
	} else if (xdomouse2 < metadeTela - 600) {
		windStrength = 3;
	}
});
