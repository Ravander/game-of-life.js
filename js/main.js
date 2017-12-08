"use strict";

const gridCanvas = document.getElementById("automata");
const gridCtx = gridCanvas.getContext("2d");

const CELLS_PER_ROW = 38;
const CELL_SIZE = gridCanvas.width / CELLS_PER_ROW;
const FPS = 8;

let grid, loop;

let createPulsar = () => {

  reset();

  /* Horizontal Bars*/
  for (let i = 4; i <= 6; i++) grid.state[i][2].state = 1;
  for (let i = 10; i <= 12; i++) grid.state[i][2].state = 1;

  for (let i = 4; i <= 6; i++) grid.state[i][7].state = 1;
  for (let i = 10; i <= 12; i++) grid.state[i][7].state = 1;

  for (let i = 4; i <= 6; i++) grid.state[i][9].state = 1;
  for (let i = 10; i <= 12; i++) grid.state[i][9].state = 1;

  for (let i = 4; i <= 6; i++) grid.state[i][14].state = 1;
  for (let i = 10; i <= 12; i++) grid.state[i][14].state = 1;

  /* Vertical Bars*/
  for (let i = 4; i <= 6; i++) grid.state[2][i].state = 1;
  for (let i = 10; i <= 12; i++) grid.state[2][i].state = 1;

  for (let i = 4; i <= 6; i++) grid.state[7][i].state = 1;
  for (let i = 10; i <= 12; i++) grid.state[7][i].state = 1;

  for (let i = 4; i <= 6; i++) grid.state[9][i].state = 1;
  for (let i = 10; i <= 12; i++) grid.state[9][i].state = 1;

  for (let i = 4; i <= 6; i++) grid.state[14][i].state = 1;
  for (let i = 10; i <= 12; i++) grid.state[14][i].state = 1;
}

let createPentadecathlon = () => {

  reset();

  for (let i = 4; i <= 6; i++) grid.state[i][5].state = 1;
  for (let i = 4; i <= 6; i += 2) grid.state[i][6].state = 1;
  for (let i = 4; i <= 6; i++) grid.state[i][7].state = 1;
  for (let i = 4; i <= 6; i++) grid.state[i][8].state = 1;
  for (let i = 4; i <= 6; i++) grid.state[i][9].state = 1;
  for (let i = 4; i <= 6; i++) grid.state[i][10].state = 1;
  for (let i = 4; i <= 6; i += 2) grid.state[i][11].state = 1;
  for (let i = 4; i <= 6; i++) grid.state[i][12].state = 1;

}

let createGun = () => {

  reset();

  /* Glider Gun */
  grid.state[25][5].state = 1;

  grid.state[23][6].state = 1;
  grid.state[25][6].state = 1;

  grid.state[13][7].state = 1;
  grid.state[14][7].state = 1;
  grid.state[21][7].state = 1;
  grid.state[22][7].state = 1;
  grid.state[35][7].state = 1;
  grid.state[36][7].state = 1;

  grid.state[12][8].state = 1;
  grid.state[16][8].state = 1;
  grid.state[21][8].state = 1;
  grid.state[22][8].state = 1;
  grid.state[35][8].state = 1;
  grid.state[36][8].state = 1;

  grid.state[1][9].state = 1;
  grid.state[2][9].state = 1;
  grid.state[11][9].state = 1;
  grid.state[17][9].state = 1;
  grid.state[21][9].state = 1;
  grid.state[22][9].state = 1;

  grid.state[1][10].state = 1;
  grid.state[2][10].state = 1;
  grid.state[11][10].state = 1;
  grid.state[15][10].state = 1;
  grid.state[17][10].state = 1;
  grid.state[18][10].state = 1;
  grid.state[23][10].state = 1;
  grid.state[25][10].state = 1;

  grid.state[11][11].state = 1;
  grid.state[17][11].state = 1;
  grid.state[25][11].state = 1;

  grid.state[12][12].state = 1;
  grid.state[16][12].state = 1;

  grid.state[13][13].state = 1;
  grid.state[14][13].state = 1;
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
