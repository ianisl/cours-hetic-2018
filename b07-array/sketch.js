let rectColors; // Notice the plural form: rectColorS
let bgColor;
let startX;
let startY;
let totalWidth;
let rectMaxHeight;
let rectCount;
let seed;

function setup() {
    createCanvas(600, 600);
    seed = floor(random(0, 100));
    bgColor = color(163, 167, 174);
    startX = 75;
    startY = 75;
    totalWidth = 450;
    rectMaxHeight = 450;
    rectCount = 10;
    rectColors = []// Create an empty array
    for (let i = 0; i < rectCount; i++) {
        let r = 237;
        let g = 0;
        let b = floor(random(10, 255));
        let c = color(r, g, b);
        rectColors.push(c); // Add the new random color to the array
    }
}

function draw() {
    randomSeed(seed);
    background(bgColor);
    noStroke();
    let l = totalWidth / rectCount;
    for (let i = 0; i < rectCount; i++) {
        fill(rectColors[i]); // Change the fill color for each rectangle
        let x = startX + i * l;
        rect(x, startY, l, random(0, rectMaxHeight));
    }
}
