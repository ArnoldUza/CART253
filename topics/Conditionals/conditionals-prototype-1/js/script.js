/**
 * Conditionals Prototype 1: The Crossroads
 * Arnold I Uzabakiriho
 * 
 * Demonstrates a conditional decision-point that dynamically alters paths and colors.
 */

"use strict";

// Object tracking the shape's physics properties
let rollingBall = {
    x: 0,
    y: 320,
    speedX: 4,
    speedY: 0,
    size: 50,
    fillColor: "#ffffff",
    hasChosenPath: false
};

/**
 * Creates a square canvas structure
 */
function setup() {
    createCanvas(640, 640);
}

/**
 * Manages intersection calculations and renders the splitting path simulation
 */
function draw() {
    background(25, 25, 35);

    // Render background guideline paths
    push();
    stroke(50, 50, 70);
    strokeWeight(2);
    line(320, 0, 320, height);
    line(0, 320, width, 320);
    pop();

    // Advance the object horizontally
    rollingBall.x += rollingBall.speedX;
    rollingBall.y += rollingBall.speedY;

    // CONDITIONAL TRIGGER: Evaluate state changes once center screen is reached
    if (rollingBall.x >= 320 && !rollingBall.hasChosenPath) {
        rollingBall.hasChosenPath = true;
        
        // Use a random conditional roll to determine path distribution
        if (random(0, 100) < 50) {
            rollingBall.speedX = 0;
            rollingBall.speedY = 4;   // Divert downwards
            rollingBall.fillColor = "#ff4d4d";
        } else {
            rollingBall.speedX = 0;
            rollingBall.speedY = -4;  // Divert upwards
            rollingBall.fillColor = "#4da6ff";
        }
    }

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}