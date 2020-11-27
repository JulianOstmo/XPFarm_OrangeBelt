class Board {
  constructor(mineCoordinates = []) {
    this.mines = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    mineCoordinates.forEach(([y, x]) => {
      this.mines[y][x] = true;
    });
    this.squares = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
    this.message = '[Sandbox 3x3] Game created';

    console.log(this.printBoard());
  }

  printBoard() {
    const formatted = this.squares
      .reduce(
        (acc, row) => {
          acc.push(`|${row.join('|')}|`);
          acc.push('+-+-+-+');
          return acc;
        },
        ['+-+-+-+'],
      )
      .join('\n');

    return `${formatted}\n\n${this.message}`;
  }

  /* eslint-disable class-methods-use-this */
  countNeighbouringMines() {
    return 3;
  }

  stepOnSquare(y, x) {
    // check if coordinates are a mines
    if (this.mines[y][x]) {
      this.squares[y][x] = 'X';
      this.message = '[Sandbox 3x3] BOOM! - Game Over.';
    } else {
      // count neighbouring mines
      this.squares[y][x] = `${this.countNeighbouringMines()}`;
      this.message = '[Sandbox 3x3] 3 mines around your square.';
    }

    // print board
    console.log(this.printBoard());
  }
}

module.exports = Board;
