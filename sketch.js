"use strict";

let state = "title";
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let playerImg;
let negcloudImg;
let poscloudImg;
let titleImg;
let level1Img;
let bonusImg;
let winImg;
let x, y;
const radius =60;



function preload() {
  playerImg = loadImage("TQFinal/TQCharactersprite.png");
  negcloudImg = loadImage("TQFinal/TQNegative.png");
  poscloudImg= loadImage("TQFinal/TQPositive.png");
  titleImg= loadImage("TQFinal/TQTitle.png");
  level1Img= loadImage("TQFinal/TQLevel1.png");
  bonusImg= loadImage("TQFinal/TQBonus.png");
  winImg= loadImage("TQFinal/TQWinscreen.png");


}

function setup() {
  cnv = createCanvas(w, h);
  x = random(500);
  y = random(500);

  textFont("fantasy");

  player = new Player();

  coins.push(new Coin());
}

function draw() {
  switch (state) {
    case "title":
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;

    case "level 1":
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;

    case "level Bonus":
      levelBonus();
      cnv.mouseClicked(levelBonusMouseClicked);
      break;

    case "you win":
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;

    default:
      break;
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = "left";
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = "right";
  }
}

function keyReleased() {
  player.direction = "still";
}

function title() {
  image(titleImg,300,300);
  imageMode(CENTER);
  fill(57, 32, 77);
  textSize(80);
  stroke(255);
  text("Too Quiet", 150, 100);
  textSize(30);
  text("click to start", 210, 550);
}

function titleMouseClicked() {
  state = "level 1";
}

function level1(){
  image(level1Img, 300, 300);
  text("Click to pop the Negative Thought Bubbles!",width * 0.15, height * 0.05);
  textSize(20);
  text("points: " + points, width * 0.05, height * 0.95);
  noStroke();
  imageMode(CENTER);
  image(negcloudImg,x, y, radius*3, radius*3);
  textSize(24);

}

function levelBonus() {
  image(bonusImg, 300, 300);
  text("BONUS ROUND!!",width * 0.40, height * 0.05);
  textSize(20);
  text("Use the left and right arrow keys to collect positive thoughts!", width * 0.08, height * 0.15 );
  text("Score: " + points, width * 0.01, height * 0.95);

  if (random(1) <= 0.01) {
    coins.push(new Coin());
  }

  player.display();
  player.move();

  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();
  }

  for (let i = coins.length - 1; i >= 0; i--) {
    if (
      dist(player.x, player.y, coins[i].x, coins[i].y) <=
      (player.r + coins[i].r) / 2
    ) {
      points++;
      coins.splice(i, 1);
      if (points >= 25) {
        state = "you win";
      }
    } else if (coins[i].y > h) {
      coins.splice(i, 1);
      console.log("cloud has been yeeted");
    }
  }
}
function levelBonusMouseClicked(){
 state = "level 1";
}

function level1MouseClicked() {
  let d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    newCloud();
    points++;
    if (points >= 15) {
        state = "level Bonus";
}
}
}

function newCloud() {
  x = random(500);
  y = random(500);
}

function youWin() {
  image(winImg, 300, 300);
  textSize(80);
  stroke(255);
  text("YOU WIN", 90, 100);
  textSize(30);
  text("click to restart", 200, 500);
}

function youWinMouseClicked() {
  state = "title";
  points = 0;
}
