// lines starting with // are comments - the computer ignores them
// other lines are commands that the computer runs

var r = 255
var g = 255
var b = 0
// these lines determine the colour of the background
// if you change the numbers the colour of the background changes
// numbers allowed range from 0-255.
// creatCanvas determines the size of the background
// if you change the numbers the size of the background will chane
// any number is allowed for background
// if you remover a number the code won't work

function setup() {
  createCanvas(300,50)

  background(r, g, b)
}
// background determines the colour
// if you change the order nothing happens
// if you change the number of letters then the colour of the background changes
// if you change the leters for a different one nothing will happen