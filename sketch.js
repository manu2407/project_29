const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2,stand3;
var ball;
var slingsShot ;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  //
  // line 1 level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);             
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
 //
  // line 2 level one
  block2_1 = new Block(640,175,30,40);
  block2_2 = new Block(670,175,30,40); 
  block2_3 = new Block(700,175,30,40);
  block2_4 = new Block(730,175,30,40);
  block2_5 = new Block(760,175,30,40)
  //
  //line 1 level two 
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //
  // line 2 level two
  block2_6 = new Block(670,135,30,40);
  block2_7 = new Block(700,135,30,40);
  block2_8 = new Block(730,135,30,40);
  //
  //line 1 level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //
  //line 1top
  block16 = new Block(390,155,30,40);
  //
  // line 2 top
  block2_9 = new Block(700,55,30,40);
  
  //
  polygon1 = new Block(100,55,40,40);
  polygon1.x=mouseX;
  polygon1.y=mouseY
 
  
//
slingshot = new SlingShot(polygon1.body,{x:200, y:50});
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block2_1.display();
  block2_2.display();
  block2_3.display();
  block2_4.display();
  block2_5.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block2_6.display();
  block2_7.display();
  block2_8.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  block2_9.display();

  fill("grey");
  block16.display();
  imageMode(CENTER);
 image(polygon_img,polygon1.position.x,polygon1.position.y,40,40);
 polygon1.display();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}