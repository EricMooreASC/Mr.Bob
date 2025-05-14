//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(134,98,197); //an RGB color for the canvas' background
  //circle
  stroke(54,51,88) // an RGB color for the circle's border
  strokeWeight(5);
  fill(180,157,222,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(100,250,70,20); // center of canvas, 20px dia
  rect(mouseX-25,mouseY-25,255,250,50,50);
  line(50,200,400,20);
  triangle(200,250,300,300,100,300);
  stroke(2);
  fill(0,0,0)
  textSize(90);
  textFont("Times New Roman");
  text('Im Stickin rn',15,280);
  ellipse(random(width),random(height),10,10);
}

function mousePressed () {

  if (dih>=225)
    {dih=0;
    
    } else {
    dih= dih+10
  }
}

