let bgColor;
let rowCount;
let columnCount;
let seed;
let webImage;
let fillPerc;
let gridColors;
let oscFreq;
let oscAmpl;

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
    oscFreq = 0.001;
    oscAmpl = 20;
    initRandom();
}

function draw() {
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
    let k = 0;
    for (let i = 0; i < columnCount; i++) {
        for (let j = 0; j < rowCount; j++) {
            let x = i * cellW;
            let y = j * cellH;
            x += sin(y + millis() * oscFreq) * oscAmpl;
            fill(gridColors[k]);
            rect(x + cellW * (1 - fillPerc)/2, y, cellW * fillPerc, cellH);
            k++;
        }
    }
    pop();
}

function initRandom() {
    seed = floor(random(100));
    gridColors = [];
    for (let i = 0; i < columnCount; i++) {
        for (let j = 0; j < rowCount; j++) {
            let cX = random(webImage.width);
            let cY = random(webImage.height);
            gridColors.push(webImage.get(cX, cY));
        }
    }
}

function keyTyped() {
    if (key === 'n') {
        initRandom();
    }
    if (key === 's') {
        saveCanvas('mySketch', 'jpg');
    }
}
