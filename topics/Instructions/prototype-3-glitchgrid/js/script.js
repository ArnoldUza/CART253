/**
 * Glitch Grid
 * Arnold I Uzabakiriho
 *
 * A weird, distorted grid of rotated squares, using Perlin
 * noise instead of pure randomness so the rotation and color
 * drift smoothly across the grid instead of looking chaotic.
 */

"use strict";

/**
 * Creates the canvas. Static image, no looping needed.
 */
function setup() {
  createCanvas(400, 400);
  noLoop();
}

/**
 * Draws a 10x10 grid of squares, each rotated and colored
 * based on a Perlin noise value sampled from its grid position.
 */
function draw() {
  background(0);

  let cols = 10;
  let rows = 10;
  let cellSize = width / cols;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellSize + cellSize / 2;
      let y = j * cellSize + cellSize / 2;

      let n = noise(i * 0.3, j * 0.3);

      push();
      translate(x, y);
      rotate(n * TWO_PI * 4);

      let shade = n * 255;
      fill(shade, 50, 255 - shade);
      noStroke();
      rect(-cellSize / 2, -cellSize / 2, cellSize * n * 1.5, cellSize * n * 1.5);
      pop();
    }
  }
}