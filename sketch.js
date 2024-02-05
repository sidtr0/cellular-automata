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

	nextGen(arr);
}

function nextGen(arr) {
	var arrN = arr;
	for (i = 0; i < xGrid; i++) {
		for (j = 0; j < yGrid; j++) {
			let sum = countNeighbours(arr, i, j);

			// overpopulation
			if (arr[i][j] == 1 && sum < 2) {
				arrN[i][j] = 0;
			}
			// underpopulation
			if (arr[i][j] == 1 && sum > 3) {
				arrN[i][j] = 0;
			}
			// reproduction
			if (arr[i][j] == 0 && sum == 3) {
				arrN[i][j] = 1;
			}
		}
	}
	arr = arrN;
}

// find sum of neighbourhood elements with wraparound for boundary elements
function countNeighbours(arr, x, y) {
	let sum = 0;

	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			let row = (x + i + xGrid) % xGrid;
			let col = (y + j + yGrid) % yGrid;
			sum += arr[row][col];
		}
	}

	sum -= arr[x][y];
	return sum;
}
