
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
roof= new Roof(435,300,250,20);
bob1 = new Bob(300,70,20);
bob2 = new Bob(340,70,20);
bob3 = new Bob(380,70,20);
bob4 = new Bob(420,70,20);
bob5 = new Bob(460,70,20);
rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
rope2 = new Rope(bob1.body,roof.body,-20*2,0);
rope3 = new Rope(bob1.body,roof.body,-0*2,0);
rope4 = new Rope(bob1.body,roof.body,20*2,0);
rope5 = new Rope(bob1.body,roof.body,40*2,0);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  function drawlLine(constraint){
bobBody.position = constraint.bodyA.position;
roofBody.position = constraint.bodyB.position;
roofBodyOffset = constraint.pointB;
roofBodyX = roofBodyPosition.x+roofBodyOffset.x;
roofBodyY = roofBodyPosition.y+roofBodyOffset.y;
line(bobBodyPosition.x,bobBodyPosition.y,roof.x,roof.y);

}
  drawSprites();
 
}



