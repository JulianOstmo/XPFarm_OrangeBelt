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

  stepOnSquare(x, y) {
    // check if coordinates are a bomb
    // if (this.mines[x][y]) {
    this.squares[x][y] = 'X';
    this.message = '[Sandbox 3x3] BOOM! - Game Over.';
    // }

    // print board
    console.log(this.printBoard());
  }
}

module.exports = Board;
