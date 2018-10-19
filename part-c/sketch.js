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
//mouseIsPressed means the colour of the shape changes when the mouse is pressed
// if you change mouseIsPressed to keyIsPressed then the colour will change when a key is pressed.
// if/else means if a condition is true then it'll do one thing is the condition is false it'll do a different thing
// {} if you remove this the code wont work
