/**
 * Prototype 2: Gear Second Mouse Blast
 * Arnold I Uzabakiriho
 * 
 * Moving the mouse rapidly triggers Gear Second using acceleration checks.
 */

"use strict";

let skyColor = "#4946ff"; // Normal blue sky
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(skyColor);

    // Fill the screen with instructions
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Shake your mouse rapidly to enter Gear Second!", width / 2, height / 2);
}