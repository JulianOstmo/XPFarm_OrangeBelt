class Player {
  constructor(board) {
    this.board = board;
  }

  takeStep(y, x) {
    this.board.stepOnSquare(y, x);
  }
}

module.exports = Player;
