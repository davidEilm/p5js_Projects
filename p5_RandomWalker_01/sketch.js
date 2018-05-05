class Coord {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

var lastCoord;
var hu = 0;
var gravity = 0.03;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(55, 55, 55);
	colorMode(HSB);
	lastCoord = new Coord(windowWidth/2,windowHeight/2);
	console.log("Press the R-key to reset the canvas!");
}

function draw() {
	for (let i = 0; i < 2000; i++) {
		var coord = new Coord(lastCoord.x + random(-5, 5), lastCoord.y + random(-5, 5))
		if (coord.x > windowWidth/2) {
			coord.x -= gravity;
		} else if (coord.x < windowWidth/2) {
			coord.x += gravity;
		}
		if (coord.y > windowHeight/2) {
			coord.y -= gravity;
		} else if (coord.y < windowHeight/2) {
			coord.y += gravity;
		}
		stroke(hu,255,255);
		line(lastCoord.x, lastCoord.y, coord.x, coord.y);
		lastCoord = coord;
	}
	hu += 3;
	if (hu > 255) {
		hu = 0;
	}
}

function keyPressed() {
	if (keyCode === 82) { //R -> Reset
		colorMode(RGB);
		background(55, 55, 55);
		colorMode(HSB);
		lastCoord = new Coord(windowWidth/2,windowHeight/2);
	}
}
