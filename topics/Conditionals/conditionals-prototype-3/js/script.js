/**
 * Conditionals Prototype 3: The Lottery Field
 * Arnold I Uzabakiriho
 * 
 * Explores rolling random percentage ranges to generate rare flashes and visual surprise.
 */

"use strict";

// System variable properties
let cycleChanceRoll = 0;
let screenFlashAlpha = 0;
let recordedEventX = 320;
let recordedEventY = 320;

/**
 * Standard system structure setup
 */
function setup() {
    createCanvas(640, 640);
}

/**
 * Processes background noise fields and rolls high-rarity conditional event triggers
*/
function draw() {

     background(30, 20, 40);

    // Roll a dynamic random integer parameter sequence every execution layer
    cycleChanceRoll = random(0, 100);

    // CONDITIONAL TRIGGER: Check if rare 0.5% event margin criteria is satisfied
    if (cycleChanceRoll < 0.5) {
        // Spike visual properties instantaneously
        screenFlashAlpha = 255;
        recordedEventX = random(50, 590);
        recordedEventY = random(50, 590);
    }

    // Soft linear degradation loop to fade structural accents naturally
    if (screenFlashAlpha > 0) {
        screenFlashAlpha -= 8;
    }

     // Render continuous indicators
    push();
    fill(255, 255, 255, 30);
    noStroke();
    rect(recordedEventX, recordedEventY, 30, 30);
    pop();

    // Overlay full viewport flash layers
    push();
    fill(255, 230, 100, screenFlashAlpha);
    rect(0, 0, width, height);
    pop();

}