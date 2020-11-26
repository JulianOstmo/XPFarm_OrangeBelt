class Board {
  constructor() {
    this.squares = [
      '+-+-+-+',
      '| | | |',
      '+-+-+-+',
      '| | | |',
      '+-+-+-+',
      '| | | |',
      '+-+-+-+',
    ].join('\n');
    this.message = '[Sandbox 3x3] Game created';

    console.log(`${this.squares}\n\n${this.message}`);
  }
}

module.exports = Board;
