"use strict";

const gridCanvas = document.getElementById("automata");
const gridCtx = gridCanvas.getContext("2d");

const CELLS_PER_ROW = 38;
const CELL_SIZE = gridCanvas.width / CELLS_PER_ROW;
const FPS = 8;

let grid, loop;

let createPulsar = () => {

  reset();

  const coords = [
    [4, 2], [5, 2], [6, 2], [10, 2], [11, 2], [12, 2], 
    [4, 7], [5, 7], [6, 7], [10, 7], [11, 7], [12, 7],
    [4, 9], [5, 9], [6, 9], [10, 9], [11, 9], [12, 9],
    [4, 14], [5, 14], [6, 14], [10, 14], [11, 14], [12, 14], 
    [2, 4], [2, 5], [2, 6], [2, 10], [2, 11], [2, 12], 
    [7, 4], [7, 5], [7, 6], [7, 10], [7, 11], [7, 12], 
    [9, 4], [9, 5], [9, 6], [9, 10], [9, 11], [9, 12], 
    [14, 4], [14, 5], [14, 6], [14, 10], [14, 11], [14, 12]
  ];

  coords.forEach(([x, y]) => grid.state[x][y].state = 1);
}

let createPentadecathlon = () => {

  reset();

  const coords = [
    [4, 5], [5, 5], [6, 5], 
    [4, 6], [6, 6],
    [4, 7], [5, 7], [6, 7],
    [4, 8], [5, 8], [6, 8],
    [4, 9], [5, 9], [6, 9], 
    [4, 10], [5, 10], [6, 10], 
    [4, 11], [6, 11],
    [4, 12], [5, 12], [6, 12]
  ];

  coords.forEach(([x, y]) => grid.state[x][y].state = 1);
}

let createGun = () => {

  reset();

  const coords = [
    [25, 5], [5, 5], [6, 5], 
    [23, 6], [25, 6],
    [13, 7], [14, 7], [21, 7], [22, 7], [35, 7], [36, 7],
    [12, 8], [16, 8], [21, 8], [22, 8], [35, 8], [36, 8],
    [1, 9], [2, 9], [11, 9], [17, 9], [21, 9], [22, 9], 
    [1, 10], [2, 10], [11, 10], [15, 10], [17, 10], [18, 10], [23, 10], [25, 10], 
    [11, 11], [17, 11], [25, 11],
    [12, 12], [16, 12],
    [13, 13], [14, 13]
  ];

  coords.forEach(([x, y]) => grid.state[x][y].state = 1);
}

let randomizeGrid = () => {
  for (let i = 0; i < CELLS_PER_ROW; i++) {
    for (let j = 0; j < CELLS_PER_ROW; j++) {
      let rand = Math.floor(Math.random() * 2);
      grid.state[i][j].state = rand;
    }
  }
}

let init = () => {

  grid = new Grid(CELLS_PER_ROW, CELL_SIZE);

  grid.draw(gridCtx);

  loop = setInterval(() => {
    grid.update();
    grid.draw(gridCtx);
  }, 1000 / FPS);
}

let reset = () => {
  for (let i = 0; i < CELLS_PER_ROW; i++) {
    for (let j = 0; j < CELLS_PER_ROW; j++) {
      grid.state[i][j].state = 0;
    }
  }
}

init();
