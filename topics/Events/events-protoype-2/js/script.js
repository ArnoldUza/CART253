/**
 * Prototype 2: Gear Second Mouse Blast
 * Arnold I Uzabakiriho
 * 
 * Moving the mouse rapidly triggers Gear Second using acceleration checks.
 */

"use strict";

let skyColor = "#4946ff"; // Normal blue sky
let currentLuffyImg;       // Holds whichever image should be visible

// Image placeholder variables
let luffyNormalImg;
let luffyGear2Img;


/**
 * Loads the stance images before the canvas draws
 */
function preload() {
  luffyNormalImg = loadImage("assets/images/luffy_normal.png");
  luffyGear2Img = loadImage("assets/images/luffy_gear2.png");
}


/**
 * Sets up the canvas window and sets the default starter stance
*/
function setup() {
    createCanvas(640, 640);
    currentLuffyImg = luffyNormalImg; // Start in normal stance
}


/**
 * Giving the 
*/
function draw() {
    background(skyColor);

    // Draw the current stance image right in the center of the screen
    imageMode(CENTER);
    image(currentLuffyImg, width / 2, height / 2, 200, 200);

    // Fill the screen with instructions
    fill(255);
    textSize(24);
    textAlign(CENTER, TOP);
    text("Shake your mouse rapidly to enter Gear Second!", width / 2, 30);
}

/**
 * Event Listener: Mouse Moved
 * Tracks speed to swap his graphic asset and canvas backdrop
 */
function mouseMoved() {
  // Calculate speed by measuring distance from the last mouse frame position
  let mouseSpeed = dist(mouseX, mouseY, pmouseX, pmouseY);
  
  // If moving rapidly, trigger the transformation
  if (mouseSpeed > 80) {
    skyColor = "#ff4646";            // Sky turns red
    currentLuffyImg = luffyGear2Img; // Swaps to Gear 2 pose image
  } else {
    skyColor = "#4946ff";            // Sky returns to blue
    currentLuffyImg = luffyNormalImg; // Swaps back to normal image
  }
}