const Bodies = Matter.Bodies;
const Engine = Matter.Engine
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var enemy1, enemy2, enemy3, enemy4;
var fEnemy1, fEnemy2;
var mario, ground, bg, sling;

function preload(){

    bg=loadImage("bg.jpg")
}

function setup(){
    var canvas = createCanvas(1500,700)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1500,635,3000,20); 
    ground1 = new Ground(700,480,200,15);
    ground2 = new Ground(1000,300,250,15);
    ground3 = new Ground(1300,550,200,15);
    mario = new Mario(200, 400, 50, 50);
    
    enemy1= new Enemy(660, 440, 50, 50);
    enemy2= new Enemy(740, 440, 50, 50);
    enemy3= new Enemy(700, 400, 50, 50);

    fEnemy1=new flowerEnemy(950, 250, 50, 50);
    fEnemy2=new flowerEnemy(1050, 250, 50, 50);
    
    enemy4= new Enemy(1340, 500, 50, 50);
    enemy5= new Enemy(1260, 500, 50, 50);
    enemy6= new Enemy(1300, 450, 50, 50);
    sling = new slingshot(mario.body,{x:200,y:300})

}

function draw(){
    background(bg);
    Engine.update(engine);
    sling.display();
    fill(253, 215, 95);
   ground.display();
   ground1.display();
   ground2.display();
   ground3.display();
    mario.display();
   enemy1.display();
   enemy2.display();
   fEnemy1.display();
   fEnemy2.display();
   enemy3.display();
   enemy4.display();
   enemy5.display();
   enemy6.display();
   


   

}



function mouseDragged() {
    Matter.Body.setPosition(mario.body, {x:mouseX, y:mouseY})
}

function mouseReleased() {
    sling.fly();
}

function keyPressed() {
  if(keyCode===32){
  sling.attach(mario.body);
}
}
 