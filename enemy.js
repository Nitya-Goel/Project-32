class Enemy{
    constructor(x,y,width,height){

         var options={
            restitution:0.7,
            density:5,
            friction:1,
            
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;

        this.image = loadImage("enemy.png")
        World.add(world,this.body);
    }

    display(){
        if(this.body.speed<3){
        var pos=this.body.position;
        var angle=this.body.angle
        push();        
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        scale(1.8);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255, this.visibility);
      rect(0, 0, this.width, this.height);
      pop();
    }
    }
    
}