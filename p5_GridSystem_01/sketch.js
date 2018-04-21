const GRID_CELL_STROKE_COLOR = [0, 0, 0];
const GRID_CELL_FILL_COLOR = [0, 0, 0];

const GRID_CELL_SIZE = 3
const GRID_HORIZONTAL_COUNT = parseInt(800 / GRID_CELL_SIZE) //window.width / (GRID_CELL_SIZE) / 2;
const GRID_VERTICAL_COUNT = parseInt(600 / GRID_CELL_SIZE) //window.height / (GRID_CELL_SIZE) / 2;


var grid;

function setup() {
	createCanvas(screen.width, screen.height);
	grid = new Grid(GRID_HORIZONTAL_COUNT, GRID_VERTICAL_COUNT, GRID_CELL_SIZE, GRID_CELL_STROKE_COLOR, GRID_CELL_FILL_COLOR);
	grid.setupGameOfLife();
	//frameRate(15);
}

function draw() {
	background(200);
	grid.executeGameOfLife();
	grid.draw();
}

function keyPressed() {
	if (keyCode === 82) { //R -> Reset
		grid.resetGameOfLife();
	}
}

class Grid {
	constructor(horizontalCount, verticalCount, sizeOfCell, strokeColor, fillColor) {
		this.horizontalCount = horizontalCount;
		this.verticalCount = verticalCount;
		this.sizeOfCell = sizeOfCell;
		this.strokeColor = strokeColor;
		this.fillColor = fillColor;

		this.gridCells = new Array(horizontalCount);
		for (let i = 0; i < horizontalCount; i++) {
			this.gridCells[i] = new Array(verticalCount);
			for (let j = 0; j < this.verticalCount; j++) {
				this.gridCells[i][j] = new GridItem(i * this.sizeOfCell, j * this.sizeOfCell, this.sizeOfCell, this.strokeColor, this.fillColor)
			}
		}
	}

	reviveCell(x, y, strokeColor = 0, fillColor = 0) {
		this.gridCells[x][y].activated = true;
	}

	killCell(x, y) {
		this.gridCells[x][y].activated = false
	}

	draw() {
		for (let i = 0; i < this.horizontalCount; i++) {
			for (let j = 0; j < this.verticalCount; j++) {
				if (this.gridCells[i][j].activated) {
					this.gridCells[i][j].draw();
				}
			}
		}
	}

	resetGameOfLife() {
		this.gridCells = new Array(this.horizontalCount);
		for (let i = 0; i < this.horizontalCount; i++) {
			this.gridCells[i] = new Array(this.verticalCount);
			for (let j = 0; j < this.verticalCount; j++) {
				this.gridCells[i][j] = new GridItem(i * this.sizeOfCell, j * this.sizeOfCell, this.sizeOfCell, this.strokeColor, this.fillColor)
			}
		}
		this.setupGameOfLife()
	}

	setupGameOfLife() {
		let spawnRate = (this.horizontalCount * this.verticalCount) / 5;
		console.log("SpawnRate: " + spawnRate);
		for (let i = 0; i < spawnRate; i++) {
			//TODO: implement, that a cell cannot be added multiple times.
			this.reviveCell(parseInt(random(0, this.horizontalCount)), parseInt(random(0, this.verticalCount)), GRID_CELL_STROKE_COLOR, GRID_CELL_FILL_COLOR);
		}
	}

	executeGameOfLife() {
		for (let x = 0; x < this.horizontalCount; x++) {
			for (let y = 0; y < this.verticalCount; y++) {

				this.gridCells[x][y].goingToLive == false;

				let countOfNeighbours = 0;
				if (y > 0) {
					if (x >= 1 && this.gridCells[x - 1][y - 1].activated) {
						countOfNeighbours++;
					}
					if (x >= 1 && this.gridCells[x][y - 1].activated) {
						countOfNeighbours++;
					}
					if (x < GRID_HORIZONTAL_COUNT - 1 && this.gridCells[x + 1][y - 1].activated) {
						countOfNeighbours++;
					}
				}
				if (y < GRID_VERTICAL_COUNT - 1) {
					if (x >= 1 && this.gridCells[x - 1][y + 1].activated) {
						countOfNeighbours++;
					}
					if (this.gridCells[x][y + 1].activated) {
						countOfNeighbours++;
					}

					if (x < GRID_HORIZONTAL_COUNT - 1 && this.gridCells[x + 1][y + 1].activated) {
						countOfNeighbours++;
					}
				}
				if (x >= 1 && this.gridCells[x - 1][y].activated) {
					countOfNeighbours++;
				}
				if (x < GRID_HORIZONTAL_COUNT - 1 && this.gridCells[x + 1][y].activated) {
					countOfNeighbours++;
				}

				//RuleSet 23/3
				if (this.gridCells[x][y].activated) {
					if (countOfNeighbours == 2 || countOfNeighbours == 3) {
						this.gridCells[x][y].goingToLive = true;
					} else {
						this.gridCells[x][y].goingToLive = false;
					}
				} else {
					if (countOfNeighbours == 3) {
						this.gridCells[x][y].goingToLive = true;
					}
				}

			}
		}

		//Update gridCells here:
		for (let x = 0; x < this.horizontalCount; x++) {
			for (let y = 0; y < this.verticalCount; y++) {
				if (this.gridCells[x][y].goingToLive == true) {
					this.reviveCell(x, y);
				} else {
					this.killCell(x, y);
				}
			}
		}
	}
}

class GridItem {
	constructor(x, y, sizeOfCell, strokeColor, fillColor) {
		this.x = x;
		this.y = y;
		this.sizeOfCell = sizeOfCell;
		this.strokeColor = strokeColor;
		this.fillColor = fillColor;
		this.activated = false;
		this.goingToLive = false;
	}

	draw() {
		strokeWeight(0);
		stroke(this.strokeColor)
		fill(this.fillColor)
		rect(this.x, this.y, this.sizeOfCell, this.sizeOfCell)
	}
}