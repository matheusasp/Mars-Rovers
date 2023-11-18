import Rover from '../classes/Rover.js';


const plateau = { width: 5, height: 5 };


function createGrid(width, height) {
    const plateauElement = document.getElementById('plateau');
    plateauElement.innerHTML = '';
    plateauElement.style.gridTemplateColumns = `repeat(${width}, 60px)`;
    for (let i = 0; i < width * height; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        plateauElement.appendChild(cell);
    }
}


function placeRover(x, y) {
    const roverElement = document.createElement('div');
    roverElement.className = 'rover';

    const cellIndex = x + y * plateau.width;
    const cells = document.getElementsByClassName('grid-cell');
    cells[cellIndex].appendChild(roverElement);
    return roverElement;
}


function updateRoverPosition(rover, roverElement) {

    const cellIndex = rover.x + rover.y * plateau.width;
    const cells = document.getElementsByClassName('grid-cell');


    cells[cellIndex].appendChild(roverElement);


    roverElement.textContent = rover.heading;
}

function startRoverMission() {
    const roverPositionInput = document.getElementById('rover-position').value.split(' ');
    const instructionsInput = document.getElementById('rover-instructions').value;

    const x = parseInt(roverPositionInput[0], 10);
    const y = parseInt(roverPositionInput[1], 10);
    const heading = roverPositionInput[2].toUpperCase();


    if (isNaN(x) || isNaN(y) || !['N', 'E', 'S', 'W'].includes(heading)) {
        alert('Please enter valid rover position and heading.');
        return;
    }


    const rover = new Rover(x, y, heading, plateau);
    const roverElement = placeRover(rover.x, rover.y);


    instructionsInput.split('').forEach((instruction, index) => {
        setTimeout(() => {
            rover.processInstruction(instruction);
            updateRoverPosition(rover, roverElement);
        }, index * 500);
    });

    setTimeout(() => {
        alert(`Final Position: ${rover.x} ${rover.y} ${rover.heading}`);
    }, instructionsInput.length * 500);
}


document.addEventListener('DOMContentLoaded', () => {
    createGrid(plateau.width, plateau.height);
    document.getElementById('start-mission-btn').addEventListener('click', startRoverMission);
});