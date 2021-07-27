const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var ground;
var wallL,wallR;
var rope;
var link;
var jointPoint;
var stones=[];
var stone;
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

   
  ground=new Base(width/2,height-10,width,10);
  wallL=new Base(150,height-150,300,200);
  wallR=new Base(width-150,height-150,300,200);
  rope=new Bridge(14,{x:300,y:height-150});
  fill("green");
  jointPoint=new Base(width-300,height-150,10,10);
  Matter.Composite.add(rope.body,jointPoint);
  link=new Link(rope,jointPoint);

  for(var i=0;i<8;i++){
    var x=random(width/2-200,width/2+300);
    var y=random(-10,140);
    stone=new Stone(x,y,70,70);
    stones.push(stone);
  }
  

}

function draw() {
  background(51);
  ground.display();
  wallL.display();
  wallR.display();
  jointPoint.display();
  rope.show();
  Engine.update(engine);
 
 for(var stone of stones){
   stone.draw();
 }
}

