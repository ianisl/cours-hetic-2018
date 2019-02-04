let bgColor;
let rowCount;
let columnCount;
let seed;
let webImage;
let fillPerc;

function preload() {
    // webImage source: https://unsplash.com/photos/RnCPiXixooY by Efe Kurnaz
    webImage = loadImage('https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e3917e828b7c2502b0041813eff1294&auto=format&fit=crop&w=634&q=80');
}

function setup() {
    createCanvas(600, 600);
    bgColor = color(33);
    rowCount = 8;
    columnCount = 10;
    fillPerc = 0.2;
    initRandom();
    background(bgColor);
    drawGrid(450, 450);
}

function drawGrid(w, h, angle) {
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
            let cX = random(webImage.width);
            let cY = random(webImage.height);
            fill(webImage.get(cX, cY));
            rect(x + cellW * (1 - fillPerc)/2, y, cellW * fillPerc, cellH);
        }
    }
    pop();
}

function initRandom() {
    seed = floor(random(100));
}

function keyTyped() {
    if (key === 'n') {
        initRandom();
        background(bgColor);
        drawGrid(450, 450);
    }
    if (key === 's') {
        saveCanvas('mySketch', 'jpg');
    }
}
