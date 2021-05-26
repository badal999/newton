
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Roof(350,100,300,20);
	//World.add(world,roof)

    bob1=new Bob(350,400,50);
	bob2=new Bob(400,400,50);
	bob3=new Bob(450,400,50);
	bob4=new Bob(500,400,50);
	bob5=new Bob(550,400,50)

    rope1=new ROPE(bob1.body,{x:350,y:100});
//	World.add(world,rope1)

	rope2=new ROPE(bob2.body,{x:400,y:100});
	//World.add(world,rope2)

	rope3=new ROPE(bob3.body,{x:450,y:100});
	//World.add(world,rope3)

	rope4=new ROPE(bob4.body,{x:500,y:100});
	//World.add(world,rope4)

    rope5=new ROPE(bob5.body,{x:550,y:100});
	//World.add(world,rope5)
    roof=new Roof(450,100,300,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  //Engine.update(engine);

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

  
  roof.display();

  

 

  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:155})
	}
}


