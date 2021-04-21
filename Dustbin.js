class Dustbin {
    constructor(x, y) {
      var options = {
          isStatic:true
      }
      this.x = x;
      this.y = y;
      // this.bottom = Bodies.rectangle(this.x, this.y, 200, 20,options);
      // this.right = Bodies.rectangle(this.x - 90, this.y - 50, 20, 100, options);
      this.left = Bodies.rectangle(this.x + 90, this.y - 50, 20, 100,options);
      this.image = loadImage('dusbin.png')
      // World.add(world, this.bottom);
      // World.add(world, this.right);
      World.add(world, this.left);
    }
  
    display() {
      imageMode(CENTER)
      noStroke();
      fill(255);
      // console.log(this.bottom.position.y)
      image(this.image, this.left.position.x, 600, 200, 200);
      // image(this.image, this.left.position.x, this.left.position.y, 20, 100);
      // image(this.image, this.right.position.x, this.right.position.y, 20, 100);
  
    }
}
