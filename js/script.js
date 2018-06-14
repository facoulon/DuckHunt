var duck1 = document.createElement("div");
document.body.appendChild(duck1);
duck1.style.width = "50px";
duck1.style.height = "50px";
duck1.style.backgroundColor = "red";
duck1.style.position = "absolute";
duck1.style.top = "0px";
duck1.style.left= "0px"
duck1.style.transition = "1s";

var duck2 = document.createElement("div");
document.body.appendChild(duck2);
duck2.style.width = "50px";
duck2.style.height = "50px";
duck2.style.backgroundColor = "blue";
duck2.style.position = "absolute";
duck2.style.top = "0px";
duck2.style.left= "0px"
duck2.style.transition = "1s";



var posTop = 0;
var posLeft = 0;
var newPosTop = 0;
var newPosLeft =0;
var newPosTop1 =0;
var newPosLeft1 =0;
var x = 0;
var y = 0;

function move() {

  if (Math.random()<0.5) {
    x = -70;
    y = 100;
  }
  else {
    x = 70;
    y = 100;
  }
  posTop = newPosTop + (Math.random()*x);
  console.log(newPosTop);
  posLeft = newPosLeft + (Math.random()*y);
  // console.log(posTop);
  duck1.style.top = posTop + "px" ;
  duck1.style.left = posLeft + "px";
  posTop1 = newPosTop1 + (Math.random()*x);
  console.log(newPosTop);
  posLeft1 = newPosLeft1 + (Math.random()*y);
  duck2.style.top = posTop1 + "px" ;
  duck2.style.left = posLeft1 + "px";
  newPosTop = posTop;
  newPosLeft = posLeft;
  newPosTop1 = posTop1;
  newPosLeft1 = posLeft1;
}

var myVar = setInterval(move,200);


duck1.addEventListener("click",function(){
  duck1.style.display = "none";
  alert("Jacky est mort")
})
duck2.addEventListener("click",function(){
  duck2.style.display = "none";
  alert("Boris est mort")
})
