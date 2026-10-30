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
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(30);
}


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

    
}