/**
 * Prototype 2: Deep Sea Divers
 * Arnold I Uzabakiriho
 * 
 * An array of divers moving from bottom to top
 * They must avoid hitting the left or right screen borders
 */

"use strict";

let divers = [];
let totalDivers = 102;

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
    background(10, 30, 80); //Ocean blue

    //Drawing safe zones or danger indicatiors at the top and bottom boundaries
    fill(200, 0, 0, 40);
    rect(0, 0, 50, height);
    rect(width - 50, 0, width, height);


    //Looping through the array to draw the divers
    for(let i = 0; i < divers.length; i++){
        let diver = divers[i];

        //Decrement the delay timer 
        if (diver.delay > 0) {
            diver.delay--;
            continue; //skip moving/drawing this plane until the delay hits 0
        }

        diver.y -= diver.speed;

        //slight wavy fluctuation to test boundary limits
        diver.x += random(-15, 15);

        //Checking if the diver hits the border or safely escapes the top
        if(diver.x <= 50 || diver.x >= width - 50 || diver.y < -diver.size) {
            diver.x = random(100, width - 100);
            diver.y = 650;
            diver.speed = random(1.5, 4),
            diver.delay = random(30, 100);
        }

        //Drawing the diver as a yellow cirle
        fill(255, 215, 0);
        noStroke();
        ellipse(diver.x, diver.y, diver.size);
    }

    
}