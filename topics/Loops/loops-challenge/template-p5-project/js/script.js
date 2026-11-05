/**
 * Lines
 * Arnold and Wassim
 * 
 * A series of lines across the canvas
 */

"use strict";

    const lines = 11;

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    let x = 0;
    let z = 0;

    for (let gradientY = 0; gradientY <= height; gradientY++) {
        let red = map(gradientY, 0, height, 255, 100)
        stroke(red, 250, 50);
        line(0, gradientY, width, gradientY);
    }

    while (x <= 500 && z <= 250){
        stroke(z);
        line(x, 0, x, height);

        z += 25;
        x += 50;
    }

    let y = 0;
    let w = 0;

    while (y <= 500 && w <= 250){
        stroke(w);
        line(0, y, width, y);

        w += 25;
        y += 50;
    }

}
   
