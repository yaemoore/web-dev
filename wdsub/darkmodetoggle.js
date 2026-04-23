let outerDiv = document.getElementById("outer-div");
let darkmodeToggle = document.getElementById("darkmode-toggle");
let onOffStat = document.getElementById("on-off-stat");


let isLight = "true"

function dmTog(event) {
 
  //change background colour to black if lightmode is on, otherwise charge to white
   if (isLight) document.body.style.backgroundColor = "black", document.body.style.color = "white", onOffStat.innerHTML = "Turn dark mode off";
  
   else document.body.style.backgroundColor = "white", document.body.style.color = "black", onOffStat.innerHTML = "Turn dark mode on";
  
  //change text to darkmode on if lightmode is off, otherwise change to darkmode off
   
  
  //change text color to white if lightmode is off, else black
  //flip isLight 
  
  isLight = !isLight
  
  //
}
