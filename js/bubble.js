/*jshint esversion: 6 */
window.addEventListener("deviceorientation", handleOrientation, true);
var test;
$(document).ready(()=>{
  $("#p1").click(()=>{$("#pageone").css("visibility","hidden");$("#pagetwo").css("visibility","visible");/*test=120;*/});
  $("#p2").click(()=>{$("#pagetwo").css("visibility","hidden");$("#pageone").css("visibility", "visible");});
});

var bubble = document.querySelector(".bubble");
var spiritbalancer = document.querySelector(".spiritbalancer");
var output = document.querySelector(".output");
var target = document.querySelector(".target");

var maxX = spiritbalancer.clientWidth - bubble.clientWidth;
var maxY = spiritbalancer.clientHeight - bubble.clientHeight;

function handleOrientation(event) {
  var x = event.beta; // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]

  // round figures down
  x = Math.round(x ,-1);
  y = Math.round(y ,-1);
//outputs X and Y coordinates 
  output.innerHTML = "x : " + x + "\n";
  output.innerHTML += "y: " + y + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x > 90) {x = 90;}
  if (x < -90) {x = -90;}
  if (y > 90) {y = 90;}
  if (y < -90) {y = -90;}

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;

  if(test==0){
    bubble.style.top = maxY * x / 150 - 30 + "px";
    bubble.style.left = maxX * y / 150 - 30 + "px";
  }
  else{

    bubble.style.top = test+"px";
    bubble.style.left = test+"px";
    test=0;
  }
  // 30 is half the size of the ball
  // It center the positioning point to the center of the ball

}
