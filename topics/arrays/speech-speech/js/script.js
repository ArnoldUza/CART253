/**
 * Speech! Speech!
 * Arnold I Uzabakiriho
 * 
 * Interactive speech-playing interface
 */

"use strict";

//speech
const  speech = ["Veni.", "Vidi.", "Vici.", "Sensi malum."];
//current sentence to display from speech
let speechIndex = 0;

/**
 * Create canvas
*/
function setup() {
    craeteCanvas(600, 100);
}


/**
 * Display the current line of the speech
*/
function draw() {
    background(0);
    // Get current line
    let currentLine = speech[speechIndex];

    //Display the line
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentLine, width / 2, height / 2);
    pop();

}