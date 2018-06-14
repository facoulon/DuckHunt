var duck = document.createElement("div");
document.body.appendChild(duck);
duck.style.width = "20px";
duck.style.height = "20px";
duck.style.backgroundColor = "red";
duck.style.position = "absolute";
duck.style.top = "17px";
duck.style.left= "22px"
var posTop = "";
var posLeft = "";

console.log(duck.style.top);
console.log(duck.style.left);


function move() {
  posTop = (Math.random()*100)+ "px";
  console.log(posTop);
  posLeft = (Math.random()*100)+ "px";
  console.log(posLeft);
  duck.style.top = posTop;
  duck.style.left = posLeft
}


var myVar = setInterval(move,500);
