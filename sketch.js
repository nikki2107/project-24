
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
paper = new Paper(300,300,30,30)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



