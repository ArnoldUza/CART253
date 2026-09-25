/**
 * Face
 * Arnold I Uzabakiriho
 *
 * A simple representational face built from ellipses,
 * a triangle, and an arc, exploring shape() functions
 * and their position/size arguments.
 */

"use strict";

/**
 * Creates the canvas. Runs once, no looping needed since
 * this is a static image.
 */
function setup() {
  createCanvas(400, 400);
  noLoop();
}

/**
 * Draws a face: head, eyes, nose, mouth, eyebrows.
 */
function draw() {
  background(255, 224, 189);

  // head
  fill(255, 205, 148);
  ellipse(200, 200, 250, 300);

  // eyes
  fill(255);
  ellipse(150, 170, 50, 30);
  ellipse(250, 170, 50, 30);
  fill(50);
  ellipse(150, 170, 15, 15);
  ellipse(250, 170, 15, 15);

  // nose
  fill(230, 170, 120);
  triangle(200, 190, 185, 240, 215, 240);

  // mouth
  fill(180, 50, 50);
  arc(200, 270, 100, 50, 0, PI);

  // eyebrows
  stroke(80, 50, 20);
  strokeWeight(4);
  line(125, 140, 175, 130);
  line(225, 130, 275, 140);
}