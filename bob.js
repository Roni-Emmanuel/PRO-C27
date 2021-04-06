var bob;
class Bob {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':3.0,
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.r = 20;
      //this.width = 120;
      //this.height = 500;
      //this.image = loadImage("paper.png")
      
     World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
      
      }
   

    };
  