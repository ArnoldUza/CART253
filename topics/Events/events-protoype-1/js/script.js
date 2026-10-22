/**
 * Prototype 1: Gum-Gum Tile Grab
 * Arnold I Uzabakiriho
 * 
 * Luffy stretches his arm across the tiles using keyboard events 
 * to find the One Piece.
 */

"use strict";

const tileSize = 64; // Bumped up so images look crisp
const rows = 10;
const columns = 10;

//image variables
let luffyImg;
let armStretchGif; //arm stretch gif
let fistImg;
let thousandSunnyImg; // Renamed from onePieceImg

// Luffy anchors on one tile
const luffy = {
  x: tileSize * 1,
  y: tileSize * 5
};

// Tracks how far the arm stretches out
const arm = {
  extendX: 0,
  extendY: 0,
  maxStretch: 5 // Limits how far his arm can reach
};

// The Thousand Sunny target ship
const thousandSunny = {
  x: tileSize * 7,
  y: tileSize * 5,
  collected: false
};

async function preload() {
  luffyImg = loadImage("assets/images/luffy_head.png");
  armStretchGif = loadImage("assets/images/luffy_stretch.gif");
  fistImg = loadImage("assets/images/luffy_fist.png");
  thousandSunnyImg = loadImage("assets/images/thousand_sunny.png");
}

/**
 * Creates the game canvas based on our grid size
*/
async function setup() {
  createCanvas(tileSize * columns, tileSize * rows);
  await preload();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}