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

    //Drawing safe zones or danger indicatiors at the top and bottom boundaries
    fill(200, 50, 50, 50);
    rect(0, 0, width, 50);
    rect(0, height - 50, width, 50);


    //Loop through all airplanes inside array
    for(let i = 0; i < airplanes.length; i++){
        let plane = airplanes[i];

        //Decrement the delay timer 
        if (plane.startDelay > 0) {
            plane.startDelay--;
            continue; //skip moving/drawing this plane until the delay hits 0
        }

        //The Logic and movement
        if(!plane.isExploded){
            plane.x += plane.speed;

            //slight wavy fluctuation to test boundary limits
            plane.y +=random(-10, 10);

            //Check boundary collisions (top or bottom limits)
            if (plane.y <= 50 || plane.y >= height - 50) {
                plane.isExploded = true;
            }

            //Checking if it successfully made it past the right border
            if (plane.x > width + plane.size) {
                resetPlane(plane);
            }
        }

        //The Rendering and Drawing
        if(plane.isExploded){
            //Drawing the explosion
            fill(255, 69, 0);
            noStroke();
            ellipse(plane.x, plane.y, plane.size * 1.5);
            

            //auto-respawn after exploding
            resetPlane(plane);
        } else {
            //Draw the airplane
            fill(255);
            stroke(0);
            push();
            translate(plane.x, plane.y);
            //Drawing a wedge facing to the right
            triangle(-plane.size, -plane.size/2, -plane.size, plane.size/2, 0, 0);
            pop(); 
        }
    }

}



//Resetting a plane's position and starts back to the left side
function resetPlane(plane) {
    plane.x = -50;
    plane.y = random(100, height - 100);
    plane.speed = random(2, 5);
    plane.isExploded = false;
    plane.startDelay = random(30, 150);
}