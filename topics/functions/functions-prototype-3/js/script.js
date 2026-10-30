/**
 * Prototype 3: Cleaning Up Shapes
 * Arnold I Uzabakiriho
 * 
 * This project takes repetitive code and cleans it up
 * with one function
 * 
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
    background(240);

    // Instead of writing many circles over and over, we just call our function
    drawTarget(150, 200, 120, color(255, 0, 0));
    drawTarget(300, 200, 80, color(0, 0, 255));
    drawTarget(450, 200, 160, color(50, 200, 50));
}

/**
 * This function draws three circles inside each other to make a target shape
 */
function drawTarget(x, y, maxRadius, coreColor) {
    push();
    noStroke();
    
    // Big outer circle
    fill(coreColor);
    ellipse(x, y, maxRadius);

     // Middle circle (same color as background)
    fill(240);
    ellipse(x, y, maxRadius * 0.66);
    
    // Small center circle
    fill(coreColor);
    ellipse(x, y, maxRadius * 0.33);
    
    pop();

}


