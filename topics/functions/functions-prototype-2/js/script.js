/**
 * Prototype 2: Starfield Generator
 * Arnold I Uzabakiriho
 * 
 * uses a function that returns an object. 
 * Generating data for stars
 */

"use strict";

//star variables
let star1;
let star2;
let star3;

/**
 * Creating the canvas
*/
function setup() {
    createCanvas(600, 400);

    // Create three separate stars using our function
    star1 = createStar(100, 2);
    star2 = createStar(200, 3.5);
    star3 = createStar(300, 5);
}


/**
 * drawing the grid of buttons
*/
function draw() {
    background(30);

    
}


