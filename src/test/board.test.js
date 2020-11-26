const Board = require('../board');

describe('Game board creation phase', () => {
  let board;

  const consoleLogSpy = jest.spyOn(global.console, 'log');

  beforeEach(() => {
    jest.clearAllMocks();
    board = new Board();
  });

  it('should print an empty 3x3 board', () => {
    const emptyBoard = [
      '+-+-+-+',
      '| | | |',
      '+-+-+-+',
      '| | | |',
      '+-+-+-+',
      '| | | |',
      '+-+-+-+',
    ].join('\n');
    const message = '[Sandbox 3x3] Game created';

    expect(consoleLogSpy).toHaveBeenCalledWith(`${emptyBoard}\n\n${message}`);
  });
});
