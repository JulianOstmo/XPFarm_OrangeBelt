class Player {
  constructor(board) {
    this.board = board;
  }

  takeStep(x, y) {
    this.board.stepOnSquare(x, y);
  }
}

module.exports = Player;
