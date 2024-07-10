const layout = document.querySelector("#layout");
const numberInput = document.querySelector("#grid-size");
const newGridBtn = document.querySelector("#new-grid");

// Custimize grid size?
let gridSize = 16;
// Custimize grid color?
// let backgroundColor = "orange";
function CreateGrid() {
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

newGridBtn.addEventListener("click", (e) => {
  const oldGrid = document.querySelectorAll(".gridSquare");

  oldGrid.forEach((oldSquare) => layout.removeChild(oldSquare));
  gridSize = Math.floor(numberInput.value);
  console.log(gridSize);
  CreateGrid();
});

CreateGrid();
