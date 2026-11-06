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

// Variable to hold our explosion sound asset
let explosionSFX;


function preload() {
    explosionSFX = loadSound("./assets/sounds/explosionFX.mp3");
}

/**
 * Creating the canvas but with meteors
*/
function setup() {
    createCanvas(600, 600);

    for (let i = 0; i < totalMeteors; i++){
        meteors.push({
            x: random(100, width),
            y: random(-500, -50),
            speed: random(2, 6),
            size: random(25, 40),
            isExploded: false,
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
        
        //spawn delay
        if (m.delay > 0){
            m.delay--;
            continue;
        }

        //Moving the meteor down
        m.y += m.speed;

        //Calculating distance between meteor's position and the mouse cursor
        let theDistance = dist(m.x, m.y, mouseX, mouseY);

        //Making it explode if it dies 
        if(theDistance < m.size / 2 + 20 ) {
            m.isExploded = true;
             // Play the explosion sound!
            if (explosionSFX && explosionSFX.isLoaded()) {
                explosionSFX.play();
            }
            // Trigger a reset immediately
            resetMeteor(m);
        }

        // Check if it safely makes it off the bottom border
        else if (m.y > height + m.size) {
            resetMeteor(m); // Reset quietly without playing sound
        }

        // Drawing the meteor (Added shape generation so they are visible)
        fill(150, 75, 0);
        noStroke();
        ellipse(m.x, m.y, m.size);

    }

}

//Function of respawning
function resetMeteor(m) {
    //respawn back at the top
    m.x = random(0, width);
    m.y = -50;
    m.speed = random(2, 6);
    m.size = random(25, 40);
    m.isExploded = false;
    m.delay = random(20, 90);
}