class Board {
  constructor() {
    this.sqaures = [
      '+-+-+-+',
      '| | | |',
      '+-+-+-+',
      '| | | |',
      '+-+-+-+',
      '| | | |',
      '+-+-+-+',
    ].join('\n');
    this.message = '[Sandbox 3x3] Game created';

    console.log(`${this.sqaures}\n\n${this.message}`);
  }
}

module.exports = Board;
