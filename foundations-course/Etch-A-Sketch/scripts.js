const layout = document.querySelector("#layout");

// Custimize grid size?
let gridSize = 16;
// Custimize grid color?
// let backgroundColor = "orange";

for (let i = 0; i < gridSize * gridSize; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.classList.add("gridSquare");
  addEventListener("mousedown", colorSquare);
  layout.appendChild(gridSquare);
}

function colorSquare(e) {
  return e.target.classList.toggle("colored");
}
