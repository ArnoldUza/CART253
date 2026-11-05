/**
 * Prototype 3: Falling Meteors
 * Arnold I Uzabakiriho
 * 
 * An array of meteors falling down
 * If they hit your mouse cursor, they explode and respawn at the top
 */

"use strict";

let meteors = [];
let totalMeteors = 40;

/**
 * Creating the canvas but with meteors
*/
function setup() {
    createCanvas(600, 600);

    for (let i = 0; i < totalMeteors; i++){
        meteors.push({
            x: random(100, height - 100),
            y: -50,
            speed: random(2, 6),
            size: random(25, 40),
            delay: random(0, 180)
        });
    }
}


/**
 * Drawing meteors, the explosion, their movement and respawn
*/
function draw() {
    background(15, 15, 25); //Outerspace

    //Draw a visual tracker for the cursor
    stroke(255, 0, 0);
    strokeWeight(2);
    noFill();
    ellipse(mouseX, mouseY, 40);


    for (let i = 0; i < meteors.length; i++){
        let m = meteors[i];

        if (m.delay > 0){
            m.delay--;
            continue;
        }
    }

}