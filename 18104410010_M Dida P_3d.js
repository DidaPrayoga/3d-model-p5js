






function setup() {
  createCanvas(800, 800, WEBGL); // Membuat canvas 3D
}

function draw() {
  background(200);
  orbitControl();

  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  
  fill(150, 1200, 250);
  stroke(0);
  strokeWeight(2);

 
  box(200);
}


