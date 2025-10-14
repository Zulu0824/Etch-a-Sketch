let rows = 16;
let cols = rows;
const canvasSize = 600;
let rgbMode = false;

const container1 = document.createElement("div");
document.body.appendChild(container1);

// Container1 is our canvas for building and holding the grid.

container1.style.display = "flex";
container1.style.flexWrap = "wrap";
container1.style.width = canvasSize + "px";
container1.style.height = canvasSize + "px";
container1.style.border = "2px solid black";

// Container2 holds all of our buttons. 
const container2 = document.createElement("div");
container2.id = "button-box";
document.body.appendChild(container2);

//Add buttons in container2.

const clearBtn = document.getElementById("clearBtn");
const canvasBtn = document.getElementById("canvasBtn");
const rgbBtn = document.getElementById("rgbBtn");

container2.appendChild(clearBtn);
container2.appendChild(canvasBtn);
container2.appendChild(rgbBtn);

//Function to pick a random color when using RGB mode.

function randomRGB() {
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const r = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//Function to build a grid.

function buildGrid(rows, cols) {
    container1.innerHTML="";
    const cellSize = canvasSize / cols;

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
        cell.style.border = "1px solid black";
        cell.style.backgroundColor = "white";
        cell.style.boxSizing = "border-box";

       cell.dataset.darkness = 0;

        cell.addEventListener("mouseenter", () => {
            if (rgbMode) {
            cell.style.backgroundColor = randomRGB();
        } else {
            let darkness = parseFloat(cell.dataset.darkness);
            if (darkness < 1) {
          darkness += 0.1;
          cell.dataset.darkness = darkness;

          const opacityValue = Math.floor(255 * (1 - darkness)); 
          cell.style.backgroundColor = `rgb(${opacityValue}, ${opacityValue}, ${opacityValue})`;
        }
      }
    });
        container1.appendChild(cell);
    }
}

buildGrid(rows, cols);

//Adding interactivity to "Clear" button.

clearBtn.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach(c => {
        c.style.backgroundColor = "white";
    });
});

//Adding interactivity to "Edit Grid" button.

canvasBtn.addEventListener("click", () => {
    const userInput = parseInt(prompt("Enter the number of rows and columns (upto 100):", "16"));
    if (!isNaN(userInput) && userInput > 1 && userInput < 100) {
        rows = userInput;
        cols = userInput;
        buildGrid(rows, cols);
    } else {
        alert("Please Enter a valid number between 2 and 100.")
    }
});

//Adding interactivity to "RGB" button.

rgbBtn.addEventListener("click", () => {
    rgbMode = !rgbMode;
    rgbBtn.textContent = rgbMode ? "Mode: RGB" : "Mode: Black"; 
});

//Add a box to put our title.

const titleBox = document.createElement("div");
titleBox.classList = "title-box"
titleBox.textContent = "Etch-a-Sketch"
document.body.insertBefore(titleBox, container1);
