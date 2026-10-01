/**
 * Growth & Interactivity
 * Arnold I Uzabakiriho
 * 
 * Experimenting with built-in interactive mouse variables and pulsing stroke scales.
 */

"use strict";

// Variables to handle automated size fluctuations over time
let currentStrokeWeight = 1;
let scaleDirection = 0.2;

/**
 * Sets up the canvas space for interactive tracking
 */
function setup() {
    createCanvas(640, 640);
}

/**
 * Draws the interactive cursor-following geometry with variable growth patterns
 */
function draw() {
    // Dark canvas to emphasize stroke shifts
    background(20, 20, 20);

    // Increment variable size to simulate breathing/growth mechanics
    currentStrokeWeight = currentStrokeWeight + scaleDirection;

    // Reverse expansion direction when hitting limit boundaries
    if (currentStrokeWeight > 15 || currentStrokeWeight < 1) {
        scaleDirection = scaleDirection * -1;
    }

    // Render the user-guided interactive element
    push();
    stroke(0, 255, 200);
    strokeWeight(currentStrokeWeight);
    noFill();
    
    // Maps the object position entirely to native interactive variables
    rectMode(CENTER);
    rect(mouseX, mouseY, 120, 120);
    pop();
}
