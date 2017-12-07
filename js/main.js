const gridCanvas = document.getElementById("automata");
const gridCtx = gridCanvas.getContext("2d");

const CELLS_PER_ROW = 38;
const CELL_SIZE = gridCanvas.width / CELLS_PER_ROW;
const FPS = 5;

let grid, loop;

let createSymbol = () => {

  reset();

  /* Horizontal Bars*/
  grid.state[4][2].state = 1;
  grid.state[5][2].state = 1;
  grid.state[6][2].state = 1;
  grid.state[10][2].state = 1;
  grid.state[11][2].state = 1;
  grid.state[12][2].state = 1;

  grid.state[4][7].state = 1;
  grid.state[5][7].state = 1;
  grid.state[6][7].state = 1;
  grid.state[10][7].state = 1;
  grid.state[11][7].state = 1;
  grid.state[12][7].state = 1;

  grid.state[4][9].state = 1;
  grid.state[5][9].state = 1;
  grid.state[6][9].state = 1;
  grid.state[10][9].state = 1;
  grid.state[11][9].state = 1;
  grid.state[12][9].state = 1;

  grid.state[4][14].state = 1;
  grid.state[5][14].state = 1;
  grid.state[6][14].state = 1;
  grid.state[10][14].state = 1;
  grid.state[11][14].state = 1;
  grid.state[12][14].state = 1;

  /* Vertical Bars*/
  grid.state[2][4].state = 1;
  grid.state[2][5].state = 1;
  grid.state[2][6].state = 1;
  grid.state[2][10].state = 1;
  grid.state[2][11].state = 1;
  grid.state[2][12].state = 1;

  grid.state[7][4].state = 1;
  grid.state[7][5].state = 1;
  grid.state[7][6].state = 1;
  grid.state[7][10].state = 1;
  grid.state[7][11].state = 1;
  grid.state[7][12].state = 1;

  grid.state[9][4].state = 1;
  grid.state[9][5].state = 1;
  grid.state[9][6].state = 1;
  grid.state[9][10].state = 1;
  grid.state[9][11].state = 1;
  grid.state[9][12].state = 1;

  grid.state[14][4].state = 1;
  grid.state[14][5].state = 1;
  grid.state[14][6].state = 1;
  grid.state[14][10].state = 1;
  grid.state[14][11].state = 1;
  grid.state[14][12].state = 1;
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
