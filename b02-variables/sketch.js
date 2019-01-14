function setup() {
    createCanvas(600, 600);
    let rectColor = color(237, 0, 62);
    let bgColor = color(163, 167, 174);
    let startX = 75;
    let startY = 75;
    let rectWidth = 450;
    let rectHeight = 150;
    background(bgColor);
    noStroke();
    fill(rectColor);
    rect(startX, startY, rectWidth, rectHeight);
}
