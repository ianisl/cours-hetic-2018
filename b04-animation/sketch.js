let rectColor;
let bgColor;
let startX;
let startY;
let rectWidth;
let rectMaxHeight;

function setup() {
    createCanvas(600, 600);
    rectColor= color(237, 0, 62);
    bgColor = color(163, 167, 174);
    startX = 75;
    startY = 75;
    rectWidth = 450;
    rectMaxHeight = 150;
}

function draw() {
    background(bgColor);
    noStroke();
    fill(rectColor);
    rect(startX, startY, rectWidth, random(0, rectMaxHeight));
}
