
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var leftboxbody, middleboxbody, rightboxbody, roof, 
blob1, blob2, blob3, blob4, blob5,
rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	leftboxbody = new Box(600, 640, 20, 100);
	middleboxbody = new Box(700, 680, 150, 20);
  rightboxbody = new Box(750, 640, 20, 100);
  
  blob1 = new Blob(200, 400, 75)
  blob2 = new Blob(300, 400, 75)
  blob3 = new Blob(400, 400, 75)
  blob4 = new Blob(500, 400, 75)
  blob5 = new Blob(600, 400, 75)

	roof = new Roof(width/2, 100, 500, 10);
  
  rope1 = new Rope(blob1.body, roof.body, -blob1Diameter*2, 0)

  
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  leftboxbody.display();
  middleboxbody.display();
  rightboxbody.display();

  blob1.display();
  blob2.display();
  blob3.display();
  blob4.display();
  blob5.display();

  rope1.display();

  ground.display();
  
  drawSprites();
}



