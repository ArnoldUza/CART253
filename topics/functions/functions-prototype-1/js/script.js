/**
 * Prototype 1: Multi-Button Grid
 * Arnold I Uzabakiriho
 * 
 * function with parameters to make three buttons.
 * Parameters let us reuse the same code to make different shapes.
 */

"use strict";

/**
 * Creating the canvas
*/
function setup() {
    createCanvas(600, 400);
}


/**
 * drawing the grid of buttons
*/
function draw() {
    background(30);

    drawButton(100, 150, 120, 60, "Click Me", color(230, 57, 70));
    drawButton(250, 150, 120, 60, "Press Here", color(58, 125, 68));
    drawButton(400, 150, 120, 60, "Action", color(67, 97, 238));
}

//button changes color when mouse hovers

function drawButton(x, y, w, h, label, baseColor) {
    // Check if mouse is hovering over this specific button instance
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        fill(255); // Highlight fill color
        cursor(HAND);
    } else {
        fill(baseColor);
        cursor(ARROW);
    }
    
    rect(x, y, w, h, 10);

    // Label configuration
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(label, x + w / 2, y + h / 2);
}