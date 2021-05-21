class Coin {
  constructor(){
    this.r = 100;
    this.x = random(w);
    this.y = 0 - this.r;
    
  }
  
  display(){
    imageMode(CENTER);
    image(poscloudImg,this.x, this.y, this.r, this.r);
  }
  
  move(){
    this.y++;
    
      if (this.y <= 455) {
      this.y += 10;
    }
  }
  
}