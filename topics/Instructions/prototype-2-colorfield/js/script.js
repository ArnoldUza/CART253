/**
 * Color Field
 * Arnold I Uzabakiriho
 *
 * An abstract composition of randomly placed, randomly
 * colored circles, exploring colorMode(HSB) and random()
 * as an alternative to default RGB color.
 */

"use strict";

/**
 * Creates the canvas and switches to HSB color mode.
 */
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100, 100);
  noLoop();
}

/**
 * Fills the canvas with 150 randomly placed, randomly sized
 * and colored circles in the blue-violet-pink hue range.
 */
function draw() {
  background(0, 0, 10);

  noStroke();
  for (let i = 0; i < 150; i++) {
    let hue = random(180, 320);
    let sat = random(60, 100);
    let bright = random(60, 100);
    let alpha = random(30, 90);
    fill(hue, sat, bright, alpha);

    let x = random(width);
    let y = random(height);
    let size = random(10, 120);
    ellipse(x, y, size, size);
  }
}