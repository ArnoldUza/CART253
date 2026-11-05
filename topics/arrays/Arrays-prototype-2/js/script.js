/**
 * Prototype 2: Deep Sea Divers
 * Arnold I Uzabakiriho
 * 
 * An array of divers moving from bottom to top
 * They must avoid hitting the left or right screen borders
 */

"use strict";

let divers = [];
let totalDivers = 5;

/**
 * Creating canvas with the array of divers
*/
function setup() {
    createCanvas(600, 600);

    //Fill up the array with diver objects
    for (let i = 0; i < totalDivers; i++){
        divers.push({
            x: random(100, width - 100), //Random horizontal start
            y: 650, //below canvas
            speed: random(1.5, 4), //swimming speed varying
            size: 20,
            delay: random(0, 200) //Random spawn timer
        });
    }

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}