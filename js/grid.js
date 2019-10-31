class Grid {

  constructor(size, cellSize) {
    this.size = size;
    this.cellSize = cellSize;
    this.gridState = [];
    this.aliveCount = 0;
    this.init();
  }

  init() {
    for (let i = 0; i < this.size; i++) {
      const row = [];
      for (let j = 0; j < this.size; j++) {
        row.push(new Cell(false, i, j, this.cellSize));
      }
      this.gridState[i] = row;
    }
  }

  update() {
    this.gridState.flat().forEach(cell => cell.checkState(this.gridState));
    this.aliveCount = 0;
    this.gridState.flat().forEach(cell => {
      cell.state = cell.nextState;
      if (cell.state) this.aliveCount++;
    });
    document.querySelector("#counter").innerHTML = `Population: ${this.aliveCount}`;
  }

  draw(ctx) {
    this.gridState.flat().forEach(cell => {
      cell.draw(ctx);
    });
  }
}
