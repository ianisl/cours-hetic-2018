let bgColor;
let rowCount;
let columnCount;
let seed;

function setup() {
    createCanvas(600, 600);
    bgColor = color(33);
    rowCount = 8;
    columnCount = 10;
    seed = floor(random(100));
    background(bgColor);
    drawGrid();
}

function drawGrid(angle) {
    randomSeed(seed);
    noStroke();
    let cellW = width / columnCount;
    let cellH = height / rowCount;
    for (let i = 0; i < columnCount; i++) {
        for (let j = 0; j < rowCount; j++) {
            let x = i * cellW;
            let y = j * cellH;
            fill(random(255));
            rect(x, y, cellW, cellH);
        }
    }
}

function keyTyped() {
    if (key === 's') {
        saveCanvas('mySketch', 'jpg');
    }
}
