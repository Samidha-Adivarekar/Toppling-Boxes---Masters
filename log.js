class Log {
    constructor(x, y, height,angle) {
      var options = {
          
          'friction':0.8,
          'density':5.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, angle,options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
     
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  