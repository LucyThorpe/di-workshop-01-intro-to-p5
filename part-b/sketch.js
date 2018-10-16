function setup() {
  createCanvas(400, 400)
  background(0, 0, 0)
}

function draw() {
  background(0)
  stroke(255, 192, 203)
  fill(255, 192, 203)
  triangle(mouseX, mouseY, 30, 30, 50, 50)
}
