const imgPool = ["../images/adaptive-pic1.webp"];

const gridContainer = document.querySelector(".pic-grid-container");

function createGridItem() {
  const gridItem = document.createElement("img");
  gridItem.classList.add("grid-item");
  gridItem.src = imgPool[Math.floor(Math.random() * imgPool.length)];
  return gridItem;
}

function createGrid() {
  for (let a = 0; a < 30; a++) {
    gridContainer.appendChild(createGridItem());
  }
}

createGrid();
