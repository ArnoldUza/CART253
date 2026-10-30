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

}


