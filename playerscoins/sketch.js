'use strict';



let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let playerImg;
let coinImg;

function preload(){
  playerImg =loadImage('testassets/testplayer.png');
  coinImg =loadImage('testassets/testcloud.png');
}



function setup() {
  cnv = createCanvas(w, h);
  
  textFont('fantasy');
  
  player = new Player();
  
 //coins[0] = new Coin();
  coins.push(new Coin())
  
  
}

function draw() {
  
  switch (state){
      
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
        
    default:
      break; 
  }
  
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    player.direction = 'left';
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'; 
  }else if (keyCode == UP_ARROW) {
    player.direction = 'up'; 
  }else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'; 
  }//else if (key = ' '){
    //player.direction = 'still';
  }


function keyReleased(){
  player.direction = 'still';
}

function title(){
    background(200, 171, 235);
  textSize(80);
  stroke(255);
  text('Too Quiet', 150,100);
  
  textSize(30);
  text('click to start collecting postive thoughts', 60,500);
}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state ='level 1'
}



function level1(){
  background(89, 36, 181);
  text('Score: ' + points, width*0.05, height*0.95);
  
  if (random(1)<= 0.01){
    coins.push(new Coin());
  }
  
  player.display();
  player.move();
  
////iterating through coins array to display and move them using for loop
  for (let i = 0; i < coins.length; i++){
  coins[i].display();
  coins[i].move();
  }
 
  //using forEach; method that applies to array 
  
  //coins.forEach(function(coin){
  //coin.display();
  //coin.move();
  //})
  
  
  // check for collision, if there is a collision incraease points by 1 and splice that coin out of array
 //if (dist(x1, y1, x2, y2)) positions
  
//need to iterate backwards through array
  for (let i = coins.length - 1; i >= 0; i--){
  if (dist(player.x, player.y, coins[i].x, coins[i].y)<= (player.r + coins[i].r) / 2){
    points++;
    coins.splice(i, 1);
    if (points >=10){
      state= 'you win';
    } }else if (coins[i].y > h){
      coins.splice(i, 1);
      console.log('cloud has been yeeted');
    }
  }
}

function level1MouseClicked(){

  //points += 1;
//console.log('points = ' + points);
  //if (points >= 10) {
    //state = 'you win';  
 // }
  
}

function youWin(){
  background(200, 171, 235);
  textSize(80);
  stroke(255);
  text('YOU WIN', 150, 100);
  
  textSize(30);
  text('click to restart', 200,500);
  
}

function youWinMouseClicked(){
  state = 'level 1'
  points = 0;
}