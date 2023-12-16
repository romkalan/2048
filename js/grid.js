import { Cell } from "./cell.js";

const gridSize = 4;
const cellsCount = gridSize * gridSize;
export class Grid {
    constructor(gridElement) {
        this.cells = [];

        for (let i = 0; i < cellsCount; i++) {
            this.cells.push(
                new Cell(gridElement, i % gridSize, Math.floor(i / gridSize) )
            );
        }
    }

    getRandomEmptyCell() {
        const emptyCells = this.cells.filter(cell => cell.isEmpty());
        const randomID = Math.floor(Math.random() * emptyCells.length);
        return emptyCells[randomID];
    }
}