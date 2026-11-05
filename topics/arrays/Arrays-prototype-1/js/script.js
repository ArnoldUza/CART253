/**
 * Flying Objects Prototype
 * Arnold I Uzabakiriho
 * 
 * An exploration of arrays holding objects. 
 * Flying objects spawn at random times from the left, moving right.
 * They must avoid crashing into the top or bottom boundaries of the canvas.
 * 
 */

"use strict";

//Defining an array of airplanes
let airplanes = [];


//The total amount we can hold in the array
let totalAirplanes = 5;



/**
 * Creating the canvas with airplanes
 * 
*/
function setup() {
    createCanvas(800, 600); 

    for (let i = 0; i < totalAirplanes; i++){
        airplanes.push({
            x: -50,
            y: random(100, height - 100),
            speed: random(2, 5),
            size: 30,
            isExploded: false,
            startDelay: random(0, 300)
        });
    }

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(135, 206, 235); //blue background

    

}



//Resetting a plane's position and starts back to the left side
function resetPlane(plane) {
    plane.x = -50;
    plane.y = random(100, height - 100);
    plane.speed = random(2, 5);
    plane.isExploded = false;
    plane.startDelay = random(30, 150);
}