class Cell {

  constructor(state, x, y, size) {
    this.state = state;
    this.nextState = 0;
    this.x = x;
    this.y = y;
    this.size = size;
    this.aliveColor = "#555555";
  }

  changeState(state) {
    if (!!state) {
      if (!!this.state) {
        this.aliveColor = "#222222";
      } else {
        this.aliveColor = "#555555";
      }
      this.nextState = 1;
    } else {
      this.nextState = 0;
    }
  }

  countAliveNeighbors(state) {
    const iMax = this.x === CELLS_PER_ROW - 1 ? 0 : 1;
    let i = this.x === 0 ? 0 : -1;
    let aliveNeighbors = 0;

    for (i; i <= iMax; i++) {
      const jMax = this.y === CELLS_PER_ROW - 1 ? 0 : 1;
      let j = this.y === 0 ? 0 : -1;

      for (j; j <= jMax; j++) {
        if (i !== 0 || j !== 0) {
          if (state[this.x + i][this.y + j].state === 1) {
            aliveNeighbors++;
          }   
        }
      }
    }
    return aliveNeighbors;
  }

  checkState(state) {
    const aliveNeighbors = this.countAliveNeighbors(state);
    if (!!this.state) {
      if (aliveNeighbors < 2 || aliveNeighbors > 3) this.changeState(0);
      else this.changeState(1);
    } else {
      if (aliveNeighbors === 3) this.changeState(1);
      else this.changeState(0);
    }
  }

  draw(ctx) {
    ctx.fillStyle = !!this.state ? this.aliveColor : '#EEEEEE';
    ctx.strokeStyle = '#666666';
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    ctx.strokeRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}
