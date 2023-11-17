function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
}

function draw() {
  background(125, 255, 125);
  fill(255, 192, 203);

  // legs
  rect(125, 250, 25, 125);
  rect(250, 250, 25, 125);
  
  fill(0, 0, 0);
  rect(125, 350, 25, 25);
  rect(250, 350, 25, 25);

  // body
  fill(255, 192, 203);
  ellipse(200, 200, 225, 200);
  
  // ears
  ellipse(160, 150, 24, 45);
  ellipse(240, 150, 24, 45);
  
  // face
  ellipse(200, 200, 120, 130);
  
  // left eye
  fill(255, 255, 255);
  circle(175, 175, 29);
  fill(0, 0, 0);
  circle(175, 175, 15);
  
  // right eye
  fill(255, 255, 255);
  circle(225, 175, 29);
  fill(0, 0, 0);
  circle(225, 175, 15);
  
  // nose
  fill(255, 192, 203);
  ellipse(200, 212, 42, 22);
  fill(0, 0, 0);
  circle(192, 212, 10);
  circle(208, 212, 10);

  // mouth
  noFill();
  angleMode(DEGREES);
  arc(200, 228, 45, 45, 45, 135, OPEN);

}
