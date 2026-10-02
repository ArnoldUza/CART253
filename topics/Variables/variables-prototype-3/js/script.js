/**
 * Atmosphere & Color - Shooting Stars
 * Arnold I Uzabakiriho
 * 
 * Simulates a night sky with shooting stars moving dynamically across coordinates.
 */

"use strict";

// Variables tracking the first shooting star's position and velocity
let starOneX = 0;
let starOneY = 100;
let starOneSpeedX = 8;
let starOneSpeedY = 4;

// Variables tracking the second shooting star's position and velocity
let starTwoX = 200;
let starTwoY = 0;
let starTwoSpeedX = 6;
let starTwoSpeedY = 6;

/**
 * Creates the square canvas space for the night sky
 */
function setup() {
    createCanvas(640, 640);
}

/**
 * Updates positions and draws the active celestial elements on a black background
 */
function draw() {
    // True black background to capture the depth of deep space
    background(0);

    // Update coordinates for the first shooting star using linear math additions
    starOneX = starOneX + starOneSpeedX;
    starOneY = starOneY + starOneSpeedY;

    // Update coordinates for the second shooting star using linear math additions
    starTwoX = starTwoX + starTwoSpeedX;
    starTwoY = starTwoY + starTwoSpeedY;

    // Render the first shooting star element
    push();
    fill(255, 255, 200);
    noStroke();
    ellipse(starOneX, starOneY, 6, 6);
    pop();

    // Render the second shooting star element
    push();
    fill(200, 230, 255);
    noStroke();
    ellipse(starTwoX, starTwoY, 8, 8);
    pop();

    

    

    
}

