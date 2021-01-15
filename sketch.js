
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	b1 = new bob(250,600,26)
    b2 = new bob(302,600,26)
	b3 = new bob(354,600,26)
	b4 = new bob(406,600,26)
	b5 = new bob(458,600,26)	
  roof1 = new roof(360,400,268,30)
  t1 = new thread({x:250, y:400}, b1.body)
  t2 = new thread({x:302, y:400}, b2.body)
  t3 = new thread({x:354, y:400}, b3.body)
  t4 = new thread({x:406, y:400}, b4.body)
  t5 = new thread({x:458, y:400}, b5.body)
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(55);
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  roof1.display()
  t1.display()
  t2.display()
  t3.display()
  t4.display()
  t5.display()
  noStroke()
  fill("red")
 textSize(40)
  text("Press up arrow key to move left bob.",20,50)
}
function keyPressed(){
  if (keyCode==UP_ARROW){
    Matter.Body.applyForce(b1.body,b1.body.position,{x:-100,y:100})
  }
}



