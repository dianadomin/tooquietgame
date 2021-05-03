'use strict';



let state = 'title';
let cnv;
let points = 0;



function setup() {
  cnv = createCanvas(600, 600);

  textFont('fantasy');
}

function draw() {

  switch (state) {

    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;

    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;

      text('score =' + score, 100, 200)


    default:
      break;
  }

}

function title() {
  background(200, 171, 235);
  textSize(80);
  stroke(255);
  text('Too Quiet', 150, 100);

  textSize(30);
  text('click to start', 220, 500);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}



function level1() {
  background(89, 36, 181);
  text('Score: ' + points, width * 0.05, height * 0.95);
}

function level1MouseClicked() {


  points += 1;
  console.log('points = ' + points);

  if (points >= 11) {
    state = 'you win';
  }

}

function youWin() {
  background(200, 171, 235);
  textSize(80);
  stroke(255);
  text('YOU WIN', 150, 100);

  textSize(30);
  text('click to restart', 200, 500);

}

function youWinMouseClicked() {
  state = 'level 1'
  points = 0;
}
