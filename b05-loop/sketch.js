let rectColor;
let bgColor;
let startX;
let startY;
let totalWidth;
let rectMaxHeight;
let rectCount;

function setup() {
    createCanvas(600, 600);
    rectColor = color(237, 0, 62);
    bgColor = color(163, 167, 174);
    startX = 75;
    startY = 75;
    totalWidth = 450;
    rectMaxHeight = 450;
    rectCount = 10;
}

function draw() {
    background(bgColor);
    noStroke();
    fill(rectColor);
    let w = totalWidth / rectCount; // Width of a single rectangle
    for (let i = 0; i < rectCount; i++) {
        let x = startX + i * w; // Start position of the current rectangle
        rect(x, startY, w, random(0, rectMaxHeight)); // Each rectangle gets a different random height
    }
}
