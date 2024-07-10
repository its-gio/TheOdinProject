const layout = document.querySelector("#layout");
const gridSizeInput = document.querySelector("#grid-size-input");
const newGridBtn = document.querySelector("#new-grid");
newGridBtn.addEventListener("click", createNewGrid);
let gridSize = 16;
// Custimize grid color?
// let backgroundColor = "orange";

function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridSquare.setAttribute("style", `width: calc(100% / ${gridSize})`);
    gridSquare.onmouseover = colorSquare;
    layout.appendChild(gridSquare);
  }
}

function colorSquare(e) {
  return e.target.classList.toggle("colored");
}

function createNewGrid(e) {
  if (gridSizeInput.value < 2) return;
  const oldGrid = document.querySelectorAll(".gridSquare");

  oldGrid.forEach((oldSquare) => layout.removeChild(oldSquare));
  gridSize = Math.floor(gridSizeInput.value);
  console.log(gridSize);
  createGrid();
}

createGrid();
