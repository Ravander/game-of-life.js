class Grid {

  constructor(size, cellSize) {
    this.size = size;
    this.cellSize = cellSize;
    this.state = [];
    this.aliveCount = 0;
    this.init();
  }

  init() {
    for (let i = 0; i < this.size; i++) {
      const row = [];
      for (let j = 0; j < this.size; j++) {
        row.push(new Cell(0, i, j, this.cellSize));
      }
      this.state[i] = row;
    }
  }
  
  update() {
    this.state.forEach(row => {
      row.forEach(cell => {
        cell.checkState(this.state);
      });
    });

    this.aliveCount = 0;

    this.state.forEach(row => {
      row.forEach(cell => {
        cell.state = cell.nextState;
        if (!!cell.state) this.aliveCount++;
      });
    });

    document.querySelector("#counter").innerHTML = `Population: ${this.aliveCount}`;
  }

  draw(ctx) {
    this.state.forEach(row => {
      row.forEach(cell => {
        cell.draw(ctx);
      });
    });
  }
}
