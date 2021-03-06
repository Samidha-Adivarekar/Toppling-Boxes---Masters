class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.01,
        'friction':0.3,
        'density':5.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
   
    rotate(angle);
    rectMode(CENTER);
    fill("brown");
    rect(pos.x ,pos.y , this.width, this.height);
    pop();
  }
};
