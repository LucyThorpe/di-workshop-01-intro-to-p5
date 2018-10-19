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
// set up is called by p5 and where you can say about the background and createCanvas
// {} describes what in the function
// the numbers in background determine the colour of the background, 0,0,0 means black background
// fill determines the colour inside the shape
// fill means the colour in shape while stroke means the colour of the outline
// if you remove stroke it goes to black if you include both fill and stroke then the shape has a colour for the inside and outline
// ellipse determines the position and the size of the shape
// if you change the numbers then the position and shape will change depending what numbers you change.
// mouseX and mouseY means the shape follows where the mouse goes

