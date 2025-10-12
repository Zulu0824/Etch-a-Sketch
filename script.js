let row = 16;
let cols = row;
const canvasSize = 800;
let rgbMode = false;

const container1 = document.createElement("div");
document.body.appendChild(container1);

container1.style.display = "flex";
container1.style.flexWrap = "Wrap";
container1.style.width = canvasSize + "px";
container1.style.height = canvasSize + "px";
container1.style.border = "2px solid black";

const container2 = document. createElement("div");
container2.id = "button-box";
document.body.appendChild(container2);