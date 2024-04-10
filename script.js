const squareGrid = document.getElementById('squareGrid');
const squareElement = document.querySelector('.square');
makeGrid(16)



function makeGrid(gridSize) {
    const squareWidth = `calc(100% / ${gridSize})`;

    for (let i = 0; i < (gridSize ** 2); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareWidth;
        squareGrid.appendChild(square);
    }
}

