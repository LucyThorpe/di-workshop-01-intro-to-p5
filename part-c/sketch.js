function setup() {
  createCanvas(400, 400)
  background(0, 0, 0)
}

function draw() { 
  if (keyIsPressed) {
    if (key == 'r') {
      fill(255, 0, 0)
      stroke(255, 0 , 0)
    }
    if (key == 'g') {
      fill(0, 255, 0)
      stroke(0, 255 , 0)
    }
    if (key == 'b') {
      fill(0, 0, 255)
      stroke(0, 0 , 255)
    }
    if (key == 'y') {
      fill(255, 255, 0)
      stroke(255, 255, 0)
    }
    if (key == 'p') {
      fill(255, 193, 203)
      stroke(255, 193, 203)
    }
    if (key == 'o') {
      fill(255, 165, 0)
      stroke(255, 165, 0)
    }
  }
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 30, 30)
  } 


}
