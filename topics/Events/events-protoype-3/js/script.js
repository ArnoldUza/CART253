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

"use strict";

/**
 * Loads the Haki graphics and audio before the canvas draws
 */
function preload() {
  luffyHakiImg = loadImage("assets/images/luffy_haki_pose.png");
  hakiShockwaveImg = loadImage("assets/images/haki_shockwave.png");
  hakiSFX = loadSound("assets/sounds/haki_blast.wav"); // Loads the sound file
}

/**
 * Sets up the canvas window
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * Updates the screen, scales up the shockwave, and draws the art
*/
function draw() {

}