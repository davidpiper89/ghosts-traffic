/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID

const orangeId = document.getElementById("first_ghost");
orangeId.style.fill = "orange";


// GET BY CLASSNAME

const blueClass = document.getElementsByClassName("second_wave");
for (let i = 0; i < blueClass.length; i++) {
  blueClass[i].style.fill = "blue";
}


// GET AREA, DRILL DOWN using GET BY TAG NAME

const area51 = document.getElementById("area-51");
const greenGhost = area51.getElementsByTagName("svg");

for (let i = 0; i < greenGhost.length; i++) {
  greenGhost[i].style.fill = "green";
}


// querySelector nth-child

const redStroke = document.querySelector("#area-51 > :nth-child(4)");
redStroke.style.strokeWidth = "15px";
redStroke.style.stroke = "red";

// from the last child, select the div immediately above the ghost and make its border '5px dashed'

// const borderDash = redStroke.querySelector("svg < div")
// borderDash.style.borderWidth = "5px";
// borderDash.style.borderStyle = "dashed";

// querySelectorAll

const area50 = document.querySelectorAll("#area-50");
area50.forEach((svg) =>{
  svg.style.fill = "red"
})
