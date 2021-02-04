//-- SimpleShapes by Mary Huang
//--Sample P5.js Sketch for drwaing things!

// Setup code goes here
function setup() {
  createCanvas(1200,800);
  print("Starring up Simple Shapes");
  print("Width = " + width);
  print("Height = " + height);
 }

//variable
var circledia = 30

// Draw code goes here
function draw() {
  background(100,150,210);
  text("Try to click the mouse",1000, 20);
  drawSquRound();
  drawInvSqu();
  drawmouse();

  fill(60,65,64);
  stroke(70,60,95);
  triangle(90, 170, 500, 30, 120, 500);

  fill(60,65,64);
  stroke(70,180,95);
  triangle(90, 170, width-500, height-180, 120, 500);

  fill(180,150,80);
  strokeWeight(2);
  circle(800, 90, 80);

  circledia = 50;
  drawCircle();

  fill(250, 141, 58);
  stroke(250, 141, 58);
  arc(1000, 600, 80, 80, 0, PI + QUARTER_PI, PIE);

  fill(250, 141, 58);
  stroke(250, 141, 58);
  arc(800, 600, 80, 80, 0, PI + HALF_PI, PIE);

  stroke('Pink');
  strokeWeight(50); 
  point(600, 600);
  point(300, 600);
}

//Function
function drawSquRound(){
	fill(80,354,0);
	stroke(255, 204, 0);
	strokeWeight(10);
	square(width/2, height/2, 500, 15);
}

function drawInvSqu(){
	line(30, 20, 85, 20);
	stroke(126);
	line(85, 20, 85, 75);
	stroke(255);
	line(85, 75, 30, 75);
}

function drawmouse() {
  fill(0);

  if (mouseIsPressed) {
    ellipse(1000, 50, 50, 50);
  } else {
    rect(1000, 50, 50, 50);
  }

  print(mouseIsPressed);
}

function drawCircle(){
	fill(80,200,100);
	strokeWeight(5);
	circle(500, 60, circledia);
}