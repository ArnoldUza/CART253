/**
 * Prototype 3: Conqueror's Haki Charging
 * Arnold I Uzabakiriho
 * 
 * Holding down the mouse button expands a Haki shockwave over time.
 */

//State variables
let shockwaveSize = 0;
let isCharging = false;

// Image and sound placeholders
let luffyHakiImg;
let hakiShockwaveImg;
let hakiSFX;

let canvasWidth = 640;  
let canvasHeight = 640;  

"use strict";

/**
 * Loads the Haki graphics and audio before the canvas draws
 */
function preload() {
  luffyHakiImg = loadImage("assets/images/luffy_haki_pose.png");
  hakiShockwaveImg = loadImage("assets/images/haki_shockwave.gif");
  hakiSFX = loadSound("assets/sounds/haki_blast.wav"); // Loads the sound file
}

/**
 * Sets up the canvas window
*/
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


/**
 * Updates the screen, scales up the shockwave, and draws the art
*/
function draw() {
    background("#1a1a1a"); // Dark training ground background

    // Set images to draw right from their center points
    imageMode(CENTER);

    // 1. If holding down click, grow and draw the Haki blast bubble over time
  if (isCharging) {
    if (shockwaveSize < canvasWidth) {
      shockwaveSize += 8; // Speed at which the wave expands
    }
    image(hakiShockwaveImg, width / 2, height / 2, shockwaveSize, shockwaveSize);
  }
}


/**
 * Event Listener: Mouse Pressed
 * Triggers when the user first clicks down
 */
function mousePressed() {
  isCharging = true;
  shockwaveSize = 0; // Reset blast size back to zero
  hakiSFX.play();    // Triggers the sound clip right when you click!
}

/**
 * Event Listener: Mouse Released
 * Triggers when the user lets go of the click
 */
function mouseReleased() {
  isCharging = false; // Stop drawing and growing the wave
}