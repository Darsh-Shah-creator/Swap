var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable');                

function setup(){
  var b2 = createButton("Click here to Swap");
  b2.position(200,200);
  b2.mousePressed(swap);
  }

function draw(){

}
function swap(){
  [a,b] = [b,a]
  console.log('New value of a ' + a)
  console.log('New value of b ' + b)
}