"use strict"

class Cell {
  constructor(state, x, y, size) {
    this.state = state;
    this.nextState = 0;
    this.x = x;
    this.y = y;
    this.size = size;
    this.aliveColor = "#333333";
  }
  changeState(state) {
    if (!!state) {
      if (!!this.state) {
        this.aliveColor = "#222222";
      } else {
        this.aliveColor = "#333333";
      }
      this.nextState = 1;
    } else {
      this.nextState = 0;
    }
  }
  countAliveNeighbors(state) {
    let aliveNeighbors = 0;

    let i = -1;
    let iMax = 1;
    if (this.x == 0) i = 0;
    if (this.x == CELLS_PER_ROW - 1) iMax = 0;

    for (i; i <= iMax; i++) {
      let j = -1;
      let jMax = 1;
      if (this.y == 0) j = 0;
      if (this.y == CELLS_PER_ROW - 1) jMax = 0;
      for (j; j <= jMax; j++) {
        if (i != 0 || j != 0) {
          if (state[this.x + i][this.y + j].state == 1) {
            aliveNeighbors++;
          }   
        }
      }
    }
    return aliveNeighbors;
  }
  checkState(state) {
    let aliveNeighbors = this.countAliveNeighbors(state);

    if (!!this.state) {
      if (aliveNeighbors < 2) this.changeState(0);
      else if (aliveNeighbors < 4) this.changeState(1);
      else this.changeState(0);
    } else {
      if (aliveNeighbors == 3) this.changeState(1);
      else this.changeState(0);
    }
  }
  draw(ctx) {
    if (!!this.state) ctx.fillStyle = this.aliveColor;
    else ctx.fillStyle = "#EEEEEE";

    ctx.strokeStyle = "#666666";

    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    ctx.strokeRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}

class Grid {
  constructor(size, cellSize) {
    this.size = size;
    this.cellSize = cellSize;
    this.state = [];
    this.init();
  }

  init() {
    for (let i = 0; i < this.size; i++) {
      let row = [];
      for (let j = 0; j < this.size; j++) {
        row[j] = new Cell(0, i, j, this.cellSize);
      }
      this.state[i] = row;
    }
  }
  update() {
    for (let i = 0; i < CELLS_PER_ROW; i++) {
      for (let j = 0; j < CELLS_PER_ROW; j++) {
        this.state[i][j].checkState(this.state);
      }
    }

    for (let i = 0; i < CELLS_PER_ROW; i++) {
      for (let j = 0; j < CELLS_PER_ROW; j++) {
        this.state[i][j].state = this.state[i][j].nextState;
      }
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.state[i][j].draw(ctx);
      }
    }
  }
}
