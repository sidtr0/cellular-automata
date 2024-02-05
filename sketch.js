var cellsize = 10;
var xGrid;
var yGrid;
var arr;

function setup() {
	createCanvas(displayWidth, displayHeight);

	xGrid = Math.floor(displayWidth / cellsize);
	yGrid = Math.floor(displayHeight / cellsize);

	console.log(xGrid);
	arr = [...Array(xGrid)].map((e) => Array(yGrid));

	for (let i = 0; i < xGrid; i++) {
		for (let j = 0; j < yGrid; j++) {
			arr[i][j] = Math.round(Math.random());
		}
	}
}

function draw() {
	background(250);

	let i, j;

	for (i = 0; i < xGrid; i++) {
		for (j = 0; j < yGrid; j++) {
			fill(arr[i][j] == 1 ? 0 : 255);
			rect(i * cellsize, j * cellsize, cellsize);
		}
	}
}

function nextGen(arr) {}
