class Coord {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

var lastCoord;
var hu = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(55, 55, 55);
	colorMode(HSB);
	lastCoord = new Coord(windowWidth/2,windowHeight/2);
	console.log("Press the R-key to reset the canvas!");
}

function draw() {
	for (let i = 0; i < 50; i++) {
		var coord = new Coord(lastCoord.x + random(-5, 5), lastCoord.y + random(-5, 5))
		if (coord.x > windowWidth/2) {
			coord.x -= 0.01;
		} else if (coord.x < windowWidth/2) {
			coord.x += 0.01;
		}
		if (coord.y > windowHeight/2) {
			coord.y -= 0.01;
		} else if (coord.y < windowHeight/2) {
			coord.y += 0.01;
		}
		stroke(hu,hu * 1.1, hu * 3);
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
		background(55, 55, 55);
		lastCoord = new Coord(windowWidth/2,windowHeight/2);
	}
}
