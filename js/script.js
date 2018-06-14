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
var newPosTop = "0";
var newPosLeft = "0";


console.log(duck.style.top);
console.log(duck.style.left);


function move() {

  posTop = (Math.random()*100)+ "px";
  posLeft = (Math.random()*100)+ "px";
  duck.style.top = posTop + newPosTop ;
  console.log(posTop);
  duck.style.left = posLeft + newPosLeft;
  newPosTop = posTop;
  newPosLeft = posLeft;
} 

var myVar = setInterval(move,3000);
