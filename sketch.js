
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stand1,stand2,box1,box2,box3,box4,box5,box6,box7,box8,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22;
var box23,box24,box25,box26,polygon,polygonimg,slingShot;

function preload(){
	polygonimg=loadImage("Polygon-tool-icon.png");
}

function setup() {
	createCanvas(900, 400);
	engine = Engine.create();
	world = engine.world;

	stand1= new Ground(390,300,250,10);
	stand2= new Ground(700,200,200,10);
	
	//level1
	box1= new Box(300,275,30,40);
	box1.shapeColor="white";
	box2= new Box(330,275,30,40);
	box2.shapeColor="white";
	box3= new Box(360,275,30,40);
	box3.shapeColor="white";
	box4= new Box(390,275,30,40);
	box4.shapeColor="white";
	box5= new Box(420,275,30,40);
	box5.shapeColor="white";
	box6= new Box(450,275,30,40);
	box6.shapeColor="white";
	box7= new Box(480,275,30,40);
	box7.shapeColor="white";
	
	//level2
	box8= new Box(315,235,30,40);
	box8.shapeColor="white";
	box9= new Box(345,235,30,40);
	box9.shapeColor="white";
	box10= new Box(375,235,30,40);
	box10.shapeColor="white";
	box11= new Box(405,235,30,40);
	box11.shapeColor="white";
	box12= new Box(435,235,30,40);
	box12.shapeColor="white";
    box13= new Box(465,235,30,40);
	box13.shapeColor="white";

	//level 3
	box14= new Box(360,195,30,40);
	box14.shapeColor="white";
	box15= new Box(390,195,30,40);
	box15.shapeColor="white";
	box16= new Box(420,195,30,40);
	box16.shapeColor="white";

	//level 4
    box17= new Box(390,155,30,40);
	box17.shapeColor="white";

	// stand 2 level1
	box18= new Box(640,160,30,40);
	box18.shapeColor="white";
	box19= new Box(670,160,30,40);
	box19.shapeColor="white";
	box20= new Box(700,160,30,40);
	box20.shapeColor="white";
	box21= new Box(730,160,30,40);
	box21.shapeColor="white";
	box22= new Box(760,160,30,40);
	box22.shapeColor="white";

	//stand2 level2
	box23= new Box(670,120,30,40);
	box23.shapeColor="white";
	box24= new Box(700,120,30,40);
	box24.shapeColor="white";
	box25= new Box(730,120,30,40);
	box25.shapeColor="white";
	
	//stand2 level3
	box26= new Box(700,80,30,40);
	box26.shapeColor="white";

	polygon= Bodies.circle(50,200,20);
	World.add(world,polygon);

	slingShot= new SlingShot(this.polygon,{x:100,y:300});

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  slingShot.display();

  imageMode(CENTER);
  image(polygonimg,polygon.position.x,polygon.position.y,40,40);
}

  function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	slingShot.fly();
  }

  function keyPressed(){
    if(keyCode===32){
        slingShot.attach(bird.polygon);
    }
}
