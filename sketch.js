const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,box1 ,box2,box3,ground
var dustbin,dustbinIMG
function preload()
{


}
function setup() {
createCanvas(1500,500);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
paper=new Paper(200,480,20)

ground=new Ground(1100,490,2000,10)
box1=new Box1(1105,450,10,100)
box2=new Box2(1150,490,100,10)
box3=new Box3(1195,450,10,100)
dustbin=createSprite(1150,450,10,10)
}



function draw() {
  rectMode(CENTER);
  background(0);
  paper.display(); 
ground.display();
box1.display();
box2.display();
box3.display();
 
 drawSprites();
 
}




