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
let gumGumSFX

// Luffy anchors on one tile
const luffy = {
  x: tileSize * 1,
  y: tileSize * 5
};

// Tracks how far the arm stretches out
const arm = {
  extendX: 0,
  extendY: 0,
  maxStretch: 6 // Limits how far his arm can reach
};

// The Thousand Sunny target ship
const thousandSunny = {
  x: tileSize * 7,
  y: tileSize * 5,
  collected: false
};

 function preload() {
  luffyImg = loadImage("./assets/images/luffy_head.png");
  armStretchGif = loadImage("./assets/images/luffy_stretch.gif");
  fistImg = loadImage("./assets/images/luffy_fist.png");
  thousandSunnyImg = loadImage("./assets/images/thousand_sunny.png");

  gumGumSFX = loadSound("assets/sounds/gum_gum.wav"); 

}

/**
 * Creates the game canvas based on our grid size
*/
 function setup() {
  createCanvas(tileSize * columns, tileSize * rows);
  
}


/**
 * Updates the screen, checks for ship target, and draws everything
*/
function draw() {
    background("#4946ff"); //blue sky
   
    // 1. Calculate where the fist is based on arm stretch
    let fistX = luffy.x + (arm.extendX * tileSize);
    let fistY = luffy.y + (arm.extendY * tileSize);

    // 2. Check if Luffy's fist reached the Thousand Sunny
     let d = dist(fistX, fistY, thousandSunny.x, thousandSunny.y);
    if (d < tileSize && !thousandSunny.collected) {
      thousandSunny.collected = true;
    }


        // 3. Draw the Thousand Sunny ship if it hasn't been reached
    if (!thousandSunny.collected) {
        image(thousandSunnyImg, thousandSunny.x, thousandSunny.y, tileSize, tileSize);
    }
    
    // 4. Draw the stretched arm animation segments tile-by-tile
    let currentX = luffy.x;
    let currentY = luffy.y;

        // Draw horizontal arm path
    while (currentX !== fistX) {
        currentX += (arm.extendX > 0) ? tileSize : -tileSize;
        if (currentX !== fistX) {
        image(armStretchGif, currentX, luffy.y, tileSize, tileSize);
        }
    }
    // Draw vertical arm path from the end of the horizontal stretch
    while (currentY !== fistY) {
        currentY += (arm.extendY > 0) ? tileSize : -tileSize;
        if (currentY !== fistY) {
        image(armStretchGif, fistX, currentY, tileSize, tileSize);
        }
    }

     // If an arrow key successfully stretched the arm, play the sound!

        // 5. Draw Luffy's head (his body anchor)
    image(luffyImg, luffy.x, luffy.y, tileSize, tileSize);
    
    // 6. Draw Luffy's fist at the very tip of the stretch
    if (arm.extendX !== 0 || arm.extendY !== 0) {
        image(fistImg, fistX, fistY, tileSize, tileSize);
    }

}

/**
 * Stretches or retracts Luffy's arm using keyboard arrow keys and spacebar
*/

function keyPressed() {
     let didMove = false;
  // Arrow keys extend or retract the arm tile by tile
  if (keyCode === RIGHT_ARROW && arm.extendX < arm.maxStretch) {
    arm.extendX++;
    didMove = true;
  }
  else if (keyCode === LEFT_ARROW && arm.extendX > -arm.maxStretch) {
    arm.extendX--;
    didMove = true;
  }
  else if (keyCode === DOWN_ARROW && arm.extendY < arm.maxStretch) {
    arm.extendY++;
    didMove = true;
  }
  else if (keyCode === UP_ARROW && arm.extendY > -arm.maxStretch) {
    arm.extendY--;
    didMove = true;
  }

       // If an arrow key successfully stretched the arm, play the sound!
  if (didMove && !gumGumSFX.isPlaying()) {
    gumGumSFX.play(); 
  }

  
  // SPACEBAR resets/retracts the arm instantly back to Luffy
  if (keyCode === 32) { 
    arm.extendX = 0;
    arm.extendY = 0;
  }
}