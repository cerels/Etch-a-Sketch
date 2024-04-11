const squareGrid = document.getElementById('squareGrid');

const btn = document.getElementById('btn');


makeGrid(16);

btn.addEventListener('click', () => {
    gridLayout = window.prompt("how big should the grid be?", 16);
    cleanGrid();
    if (gridLayout < 100)
        makeGrid(gridLayout);
    else
        makeGrid(100);

});


function makeGrid(gridSize) {
    const squareWidth = `calc(100% / ${gridSize})`;

    for (let i = 0; i < (gridSize ** 2); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareWidth;
        squareGrid.appendChild(square);

        // add an event listener to change color when hovering
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomHexColor();
        });
    }
}

function cleanGrid() {
    squareGrid.innerHTML = '';
};

function getRandomHexColor() {
    // Generate a random integer between 0 and 16777215 (decimal representation of ffffff)
    const randomInt = Math.floor(Math.random() * 16777216);
    // Convert the random integer to hexadecimal and pad with zeros to ensure it's six digits
    const hexColor = randomInt.toString(16).padStart(6, '0');
    // Return the hexadecimal color code
    return `#${hexColor}`;
}