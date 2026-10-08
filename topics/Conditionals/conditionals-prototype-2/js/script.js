/**
 * Conditionals Prototype 2: The Shy Shape
 * Arnold I Uzabakiriho
 * 
 * Maps conditional cursor proximity checking to simulate fear and personality.
 */

"use strict";

// Object managing properties for the responsive visual entity
let shyTarget = {
    x: 320,
    y: 320,
    size: 100,
    currentBoxColor: "#00ffcc"
};

/**
 * Initializes the default canvas space
 */
function setup() {
    createCanvas(640, 640);
}


/**
 * Evaluates cursor distance constraints to trigger defensive movements
*/
function draw() {

    background(15, 15, 15);

    // Compute direct spatial distance tracking variables
    let mouseDistance = dist(mouseX, mouseY, shyTarget.x, shyTarget.y);

    // CONDITIONAL TRIGGER: Evaluate proximity threshold violations
    if (mouseDistance < 120) {
        // Change colors to express panic state
        shyTarget.currentBoxColor = "#ff3366";
        
        // Escape logic along matching movement directions
        if (mouseX > shyTarget.x) {
            shyTarget.x -= 5;
        } else {
            shyTarget.x += 5;
        }
        
        if (mouseY > shyTarget.y) {
            shyTarget.y -= 5;
        } else {
            shyTarget.y += 5;
        }
    } else {
        // Calm idle color configuration when mouse is distant
        shyTarget.currentBoxColor = "#00ffcc";
    }

}