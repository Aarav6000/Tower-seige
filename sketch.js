const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var world, engine;

var hurler, sling, platform1, platform2, ground;
var blu1, blu2, blu3, blu4, blu5, blu6, blu7, blu8, blu9, blu10, blu11, blu12;
var red1, red2, red3, red4, red4, red5, red6;
var gre1, gre2, gre3, gre4, rge5, gre6;
var grey;
var sBlu, sRed, sGre, whi;

function setup() {
  createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;

  //preset colours
  sBlu = [50, 50, 250];
  sGre = [50, 250, 50];
  sRed = [250, 50, 50];

  //make the platforms
  platform1 = new Box(530, 440, 320, 30, 255, true);
  platform2 = new Box(960, 200, 260, 30, 255, true);

  //make the hurler
  hurler = new Hexa(110, 270);

  //make the sling for the sling shot
  sling = new string(hurler.body, {x: 130, y: 220});

  //the first piramid
  blu1 = new Box(410, 350, 40, 50, sBlu, false);
  blu2 = new Box(450, 350, 40, 50, sBlu, false);
  blu3 = new Box(490, 350, 40, 50, sBlu, false);
  blu4 = new Box(530, 350, 40, 50, sBlu, false);
  blu5 = new Box(570, 350, 40, 50, sBlu, false);
  blu6 = new Box(610, 350, 40, 50, sBlu, false);
  blu7 = new Box(650, 350, 40, 50, sBlu, false);

  gre1 = new Box(450, 300, 40, 50, sGre, false);
  gre2 = new Box(490, 300, 40, 50, sGre, false);
  gre3 = new Box(530, 300, 40, 50, sGre, false);
  gre4 = new Box(570, 300, 40, 50, sGre, false);
  gre5 = new Box(610, 300, 40, 50, sGre, false);

  red1 = new Box(490, 250, 40, 50, sRed, false);
  red2 = new Box(530, 250, 40, 50, sRed, false);
  red3 = new Box(570, 250, 40, 50, sRed, false);

  grey = new Box(530, 200 ,40, 50, 155, false);

  //the second piramid
  blu8 = new Box(870, 150, 40, 50, sBlu, false);
  blu9 = new Box(910, 150, 40, 50, sBlu, false);
  blu10 = new Box(950, 150, 40, 50, sBlu, false);
  blu11 = new Box(990, 150, 40, 50, sBlu, false);
  blu12 = new Box(1030, 150, 40, 50, sBlu, false);

  red4 = new Box(910, 100, 40, 50 ,sRed, false);
  red5 = new Box(950, 100, 40, 50 ,sRed, false);
  red6 = new Box(990, 100, 40, 50 ,sRed, false);

  gre6 = new Box(950, 50, 40, 50, sGre, false);

  Engine.run(engine);
}

function draw() {
  background(100);
  Engine.update(engine);
  showMouse(1000, 550, "s");
  //2 platforms
  platform1.display();
  platform2.display();

  //hurler
  hurler.display();

  //sling line
  sling.display();
  strokeWeight(1);

  //piramid 1
  blu1.display();
  blu2.display();
  blu3.display();
  blu4.display();
  blu5.display();
  blu6.display();
  blu7.display();

  gre1.display();
  gre2.display();
  gre3.display();
  gre4.display();
  gre5.display();

  red1.display();
  red2.display();
  red3.display();

  grey.display();

  //piramid 2
  blu8.display();
  blu9.display();
  blu10.display();
  blu11.display();
  blu12.display();

  red4.display();
  red5.display();
  red6.display();

  gre6.display();

  drawSprites();
}

//draggind the box
function mouseDragged(){
  Body.setPosition(hurler.body, {x: mouseX, y: mouseY});
}

//releasing the box
function mouseReleased(){
  sling.fly();
}