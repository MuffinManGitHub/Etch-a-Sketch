const container = document.querySelector('.container');
//const squares = document.querySelectorAll('.square');
const gridBtn = document.getElementById('newGrid');

container.innerHTML = '';

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('square')) {
        e.target.style.backgroundColor = 'black';
    }     
});


gridBtn.addEventListener('click', () => {
   
    let size = prompt("Enter new grid size (max 100):");
    size = Math.min(size, 100); 
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    
    createGrid(size);
});

function createGrid(size) {
    container.innerHTML = '';

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '800px';
    container.style.height = '800px';

    const squareSize = 800 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}