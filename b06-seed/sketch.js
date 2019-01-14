let rectColor;
let bgColor;
let startX;
let startY;
let totalWidth;
let rectMaxHeight;
let rectCount;
let seed;

function setup() {
    createCanvas(600, 600);
    seed = 100; // Set the seed to an integer
    rectColor = color(237, 0, 62);
    bgColor = color(163, 167, 174);
    startX = 75;
    startY = 75;
    totalWidth = 450;
    rectMaxHeight = 450;
    rectCount = 10;
}

function draw() {
    randomSeed(seed); // Set the behavior of 'random' with the seed
    background(bgColor);
    noStroke();
    fill(rectColor);
    let w = totalWidth / rectCount;
    for (let i = 0; i < rectCount; i++) {
        let x = startX + i * w;
        rect(x, startY, w, random(0, rectMaxHeight));
    }
}
