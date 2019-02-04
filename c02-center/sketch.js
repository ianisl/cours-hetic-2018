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
    drawGrid(450, 450);
}

function drawGrid(w, h) {
    randomSeed(seed);
    push();
    translate((width - w)/2, (height - h)/2);
    noStroke();
    let cellW = w / columnCount;
    let cellH = h / rowCount;
    for (let i = 0; i < columnCount; i++) {
        for (let j = 0; j < rowCount; j++) {
            let x = i * cellW;
            let y = j * cellH;
            fill(random(255));
            rect(x, y, cellW, cellH);
        }
    }
    pop();
}

function keyTyped() {
    if (key === 's') {
        saveCanvas('mySketch', 'jpg');
    }
}
