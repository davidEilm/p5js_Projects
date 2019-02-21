var line1, line2, line3, line4, line5, line6, line7, line8
var hSpacing, vPart, vPartOffset

//Don't initialize the next two values here, do it in setup(). Otherwise the outcome is too small for some reason...
var width
var height

var vStart
var vEnd
var hStart
var hEnd

var scrollValue = 0;

const padding = 35;
const incrementValue = 0.05;

function setup() {
	width = 450
	height = 450

	vStart = padding
	vEnd = height - padding
	hStart = padding
	hEnd = width - padding

	let horizontalRange = (hEnd - hStart)
	let verticalRange = (vEnd - vStart)

	hSpacing = horizontalRange / (38)
	vPart = verticalRange / 2.5
	vPartOffset = verticalRange / 20

	//computeLinePos()

	createCanvas(width, height)
}

function computeLinePos() {
	line1 = vStart

	line3 = vPart + scrollValue
	line2 = line3 - vPartOffset
	line4 = line3 + vPartOffset

	line6 = 2 * vPart + scrollValue
	line5 = line6 - vPartOffset
	line7 = line6 + vPartOffset

	line8 = vEnd
}

function mouseWheel(event) {
	scrollValue += event.delta;
	scrollValue = constrain(scrollValue, -84, 84);
	return false;
}

function draw() {
	computeLinePos()

	background(0)
	fill(0)
	strokeCap(PROJECT)
	stroke(256, 256, 256, 256)
	strokeWeight(16)

	//E
	line(hStart + hSpacing * 0, line1, hStart + hSpacing * 0, line8)

	line(hStart + hSpacing * 0, line1, hStart + hSpacing * 2, line1)
	line(hStart + hSpacing * 0, line3, hStart + hSpacing * 2, line3)
	line(hStart + hSpacing * 0, line8, hStart + hSpacing * 2, line8)

	line(hStart + hSpacing * 2, line1, hStart + hSpacing * 2, line2)
	line(hStart + hSpacing * 2, line8, hStart + hSpacing * 2, line4)

	//i
	line(hStart + hSpacing * 4, line3, hStart + hSpacing * 4, line3)
	line(hStart + hSpacing * 4, line8, hStart + hSpacing * 4, line4)

	//l
	line(hStart + hSpacing * 6, line1, hStart + hSpacing * 6, line8)
	line(hStart + hSpacing * 6, line8, hStart + hSpacing * 8, line8)
	line(hStart + hSpacing * 8, line4, hStart + hSpacing * 8, line8)

	//m
	line(hStart + hSpacing * 10, line4, hStart + hSpacing * 10, line8)
	line(hStart + hSpacing * 12, line4, hStart + hSpacing * 12, line8)
	line(hStart + hSpacing * 14, line4, hStart + hSpacing * 14, line8)

	line(hStart + hSpacing * 10, line4, hStart + hSpacing * 14, line4)

	//s
	line(hStart + hSpacing * 16, line4, hStart + hSpacing * 18, line4)
	line(hStart + hSpacing * 16, line6, hStart + hSpacing * 18, line6)
	line(hStart + hSpacing * 16, line8, hStart + hSpacing * 18, line8)
	

	line(hStart + hSpacing * 16, line4, hStart + hSpacing * 16, line6)
	line(hStart + hSpacing * 16, line7, hStart + hSpacing * 16, line8)
	line(hStart + hSpacing * 18, line6, hStart + hSpacing * 18, line8)
	line(hStart + hSpacing * 18, line4, hStart + hSpacing * 18, line5)

	//t
	line(hStart + hSpacing * 20, line1, hStart + hSpacing * 20, line8)
	line(hStart + hSpacing * 8, line3, hStart + hSpacing * 24, line3)

	//e
	line(hStart + hSpacing * 22, line4, hStart + hSpacing * 22, line8)
	line(hStart + hSpacing * 24, line4, hStart + hSpacing * 24, line5)
	line(hStart + hSpacing * 24, line6, hStart + hSpacing * 24, line8)

	line(hStart + hSpacing * 22, line4, hStart + hSpacing * 24, line4)
	line(hStart + hSpacing * 22, line5, hStart + hSpacing * 24, line5)
	line(hStart + hSpacing * 22, line8, hStart + hSpacing * 24, line8)

	//i
	line(hStart + hSpacing * 26, line3, hStart + hSpacing * 26, line3)
	line(hStart + hSpacing * 26, line8, hStart + hSpacing * 26, line4)

	//n
	line(hStart + hSpacing * 28, line3, hStart + hSpacing * 28, line8)
	line(hStart + hSpacing * 30, line4, hStart + hSpacing * 30, line8)

	line(hStart + hSpacing * 28, line4, hStart + hSpacing * 30, line4)

	//e
	line(hStart + hSpacing * 32, line4, hStart + hSpacing * 32, line8)
	line(hStart + hSpacing * 34, line4, hStart + hSpacing * 34, line5)
	line(hStart + hSpacing * 34, line6, hStart + hSpacing * 34, line8)

	line(hStart + hSpacing * 32, line4, hStart + hSpacing * 34, line4)
	line(hStart + hSpacing * 32, line5, hStart + hSpacing * 34, line5)
	line(hStart + hSpacing * 32, line8, hStart + hSpacing * 34, line8)

	//r
	line(hStart + hSpacing * 36, line3, hStart + hSpacing * 36, line8)
	line(hStart + hSpacing * 38, line4, hStart + hSpacing * 38, line5) //optional

	line(hStart + hSpacing * 36, line4, hStart + hSpacing * 38, line4)

	noFill()
}