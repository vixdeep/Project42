function setup() {
  createCanvas(400,400);
  
  angleMode(DEGREES)
}

function draw() {
  background(0,0,0);
  hr = hour();
  min = minute();
  sec = second();

  scAngle = map(sec,0,60,0,360)  
  minAngle = map(min,0,60,0,360) 
  hrAngle = map(hr%12,0,12,0,360) 
  translate(200,200);
  rotate(-90)

  push();
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push();
  rotate(minAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push();
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  stroke(255,0,255)
  strokeWeight(9)
  noFill()
  stroke(255,0,0)
  arc(0,0,300,300,0,scAngle)
  stroke(0,255,0)
  arc(0,0,300,300,0,minAngle)
  stroke(0,0,255)
  arc(0,0,300,300,0,hrAngle)

  drawSprites();
}