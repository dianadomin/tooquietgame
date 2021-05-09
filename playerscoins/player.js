class Player {
  constructor() {
    this.r = 60;
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 3;
    this.direction = 'still';
  }

  display() {
    //rect(this.x, this.y, this.r, this.r);
    image(playerImg, this.x, this.y, this.r, this.r);

  }

  move() {
    switch (this.direction) {
      case 'still':
        //nothing moves
        break;

      case 'up':
        //decreases y pos
        if (this.y > 0) {
          this.y -= this.speed;
        }
        break;

      case 'down':
        //increases y pos
        if (this.y < h - this.r) {
          this.y += this.speed;
        }
        break;

      case 'right':
        //increasing x pos
        if (this.x < w - this.r) {
          this.x += this.speed;
        }
        break;

      case 'left':
        //decreasing x pos
        if (this.x > 0) {
          this.x -= this.speed;
        }
        break;
      default:
        break;




    }
  }


}
