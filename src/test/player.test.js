const Player = require('../player');
const Board = require('../board');

describe('Player initialisation', () => {
  it('should create instance of Player with a new Board', () => {
    const board = new Board();
    const player = new Player(board);
    expect(player.board).toBeInstanceOf(Board);
  });
});

describe('Player takes step on board', () => {
  let board;

  const consoleLogSpy = jest.spyOn(global.console, 'log');

  beforeEach(() => {
    jest.clearAllMocks();
    board = new Board();
  });

  it('should see printed board with explosion ("X") and Game Over message', () => {
    const expectedBoard = [
      '+-+-+-+',
      '| | | |',
      '+-+-+-+',
      '| |X| |',
      '+-+-+-+',
      '| | | |',
      '+-+-+-+',
    ].join('\n');
    const message = '[Sandbox 3x3] BOOM! - Game Over.';

    const player = new Player(board);
    player.takeStep(1, 1);

    expect(consoleLogSpy).toHaveBeenNthCalledWith(
      2,
      `${expectedBoard}\n\n${message}`,
    );
  });
});
