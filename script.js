let rows = 16;
let cols = rows;
const canvasSize = 800;
let rgbMode = false;

const container1 = document.createElement("div");
document.body.appendChild(container1);

// Container1 is our canvas for building and holding the grid

container1.style.display = "flex";
container1.style.flexWrap = "wrap";
container1.style.width = canvasSize + "px";
container1.style.height = canvasSize + "px";
container1.style.border = "2px solid black";

// Container2 holds all of our buttons 
const container2 = document. createElement("div");
container2.id = "button-box";
document.body.appendChild(container2);

//Add buttons in container2

const clearBtn = document.getElementById("clearBtn");
const canvasBtn = document.getElementById("canvasBtn");
const rgbBtn = document.getElementById("rgbBtn");

container2.appendChild(clearBtn);
container2.appendChild(canvasBtn);
container2.appendChild(rgbBtn);

function buildGrid(rows, cols) {
    container1.innerHTML="";
    const cellSize = canvasSize / cols;

    for (let i = 0; i < rows *cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
        cell.style.border = "1px solid black";
        cell.style.backgroundColor = "white";
        cell.style.boxSizing = "border-box";

        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "black";
        });
        container1.appendChild(cell);
    }
}

buildGrid(rows, cols);

clearBtn.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach(c => {
        c.style.backgroundColor = "white";
    });
});