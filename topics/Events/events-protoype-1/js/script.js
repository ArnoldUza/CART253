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
let armSegmentImg;
let fistImg;
let onePieceImg;

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

// The treasure target
const onePiece = {
  x: tileSize * 7,
  y: tileSize * 5,
  collected: false
};

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}