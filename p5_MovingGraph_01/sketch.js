const incrementValue = 0.01;
const movingSpeed = 4
var width; //Don't initialize the values here, do it in setup(). Otherwise the outcome is too small for some reason...
var height;

var start = 0;

function setup() {
	width = 600
	height = 600
	createCanvas(width, height);
	noiseDetail(4)
}

function draw() {
	background(240)

	fill(0);
	text(floor(frameRate()) + " fps", 0, 10);
	fill(255);

	stroke(200, 0, 0, 100)
	line(0, height / 2, width, height / 2)
	stroke(0)

	noFill()

	var xOff = start;
	beginShape()
	for (x = 0; x < width; x++) {
		var y = f(xOff) //Replace f(xOff) with g(xOff), h(xOff) or some other created functions.
		vertex(x, y)
		xOff += incrementValue
	}
	endShape()

	start += incrementValue * movingSpeed
}

//Perlin-Noise
function f(x) {
	return map(noise(x), 0, 1, height, 0)
}

//Sine
function g(x) {
	return map(Math.sin(x), -1, 1, height, 0)
}

//Tangent
function h(x) {
	return map(Math.tan(x), -50, 50, height, 0)
}