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

     // Move and show each star
    moveStar(star1);
    moveStar(star2);
    moveStar(star3);
}


/**
 * This function makes and returns a new star object with its own data
 */
function createStar(yPos, customSpeed) {
    let starData = {
        x: random(0, width),
        y: yPos,
        size: random(4, 10),
        speed: customSpeed
    };
    return starData; // Send the star data back to setup
}

/**
 * This function draws the star and moves it across the screen
 */
function moveStar(star) {
    fill(255, 255, 200);
    noStroke();
    ellipse(star.x, star.y, star.size);
    
    // Move the star to the right
    star.x += star.speed;
    
    // If the star goes off screen, reset it to the left side
    if (star.x > width) {
        star.x = 0;
    }
}