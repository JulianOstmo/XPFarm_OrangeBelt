const Player = require('../player');
const Board = require('../board');
const {
  LEFT_MIDDLE,
  MIDDLE_MIDDLE,
  MIDDLE_BOTTOM,
  LEFT_BOTTOM,
} = require('../coordinates');

describe('Player initialisation', () => {
  it('should create instance of Player with a new Board', () => {
    const board = new Board();
    const player = new Player(board);
    expect(player.board).toBeInstanceOf(Board);
  });
});

describe('Player takes step on 3x3 board', () => {
  const consoleLogSpy = jest.spyOn(global.console, 'log');

  beforeEach(() => {
    jest.clearAllMocks();
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

    const board = new Board([MIDDLE_MIDDLE]);
    const player = new Player(board);
    player.takeStep(1, 1);

    expect(consoleLogSpy).toHaveBeenNthCalledWith(
      2,
      `${expectedBoard}\n\n${message}`,
    );
  });

  it('should see printed board with "3" in bottom left corner', () => {
    const expectedBoard = [
      '+-+-+-+',
      '| | | |',
      '+-+-+-+',
      '| | | |',
      '+-+-+-+',
      '|3| | |',
      '+-+-+-+',
    ].join('\n');
    const message = '[Sandbox 3x3] 3 mines around your square.';

    const mineCoordinates = [LEFT_MIDDLE, MIDDLE_MIDDLE, MIDDLE_BOTTOM];
    const board = new Board(mineCoordinates);
    const player = new Player(board);
    player.takeStep(2, 0);

    expect(consoleLogSpy).toHaveBeenNthCalledWith(
      2,
      `${expectedBoard}\n\n${message}`,
    );
  });
});
