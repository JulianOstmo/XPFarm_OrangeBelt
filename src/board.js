class Board {
  constructor() {
    this.mines = [
      [null, null, null],
      [null, true, null],
      [null, null, null],
    ];
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
