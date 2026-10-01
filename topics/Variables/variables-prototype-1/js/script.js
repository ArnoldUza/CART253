/**
 * Movement & Math
 * Arnold I Uzabakiriho
 * 
 * Using variables to control an object's position with linear and random movement.
 */

"use strict";

// Variables for tracking the shape's horizontal position, movement speed, and random jitter
let circleX = 100;
let circleSpeed = 3;
let circleJitterY = 320;

/**
 * Creates the main canvas for the experiment
 */
function setup() {
    // Create a square canvas
    createCanvas(640, 640);
}

/**
 * Handles background rendering, updating positions using math, and drawing the circle
 */
function draw() {
    // Solid dark background to prevent trailing artifact lines
    background(0);

    // Apply linear math to change horizontal position over time
    circleX += circleSpeed; // (circleX = circle X + circleSpeed)

    // Apply random math to introduce subtle vertical jitter
    circleJitterY = 320 + random(-5, 5);

    // Render the visual element using styling layers
    push();
    fill(255, 204, 0);
    noStroke();
    ellipse(circleX, circleJitterY, 80, 80);
    pop();

    // Reset loop if the shape leaves the canvas boundaries
    if (circleX > width + 40) {
        circleX = -40;
    }
}
