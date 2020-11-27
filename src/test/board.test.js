const Board = require('../board');
const {
  LEFT_MIDDLE,
  MIDDLE_MIDDLE,
  MIDDLE_BOTTOM,
  LEFT_BOTTOM,
} = require('./COORDINATES');

describe('Game board creation phase', () => {
  const consoleLogSpy = jest.spyOn(global.console, 'log');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should print an empty 3x3 board', () => {
    /* eslint-disable-next-line no-unused-vars */
    const board = new Board();
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

  it('should be created with 1 mine in the central square', () => {
    const board = new Board([[1, 1]]);
    const totalMines = board.mines.flat().reduce((count, cell) => {
      if (cell) {
        return count + 1;
      }
      return count;
    }, 0);
    expect(totalMines).toBe(1);
    expect(board.mines[1][1]).toBe(true);
  });

  it('should be created with 3 mines surrounding the bottom left corner square', () => {
    const mineCoordinates = [LEFT_MIDDLE, MIDDLE_MIDDLE, MIDDLE_BOTTOM];
    const board = new Board(mineCoordinates);
    expect(mineCoordinates.every(([y, x]) => board.mines[y][x])).toBe(true);
  });
});

describe('Revealing square value', () => {
  it('should add explosion ("X") to board when bomb stepped on', () => {
    const [y, x] = MIDDLE_MIDDLE;
    const board = new Board([MIDDLE_MIDDLE]);

    board.stepOnSquare(y, x);

    expect(board.squares[y][x]).toBe('X');
  });

  it('should reveal "3" on the board when stepping on the bottom left square', () => {
    const mineCoordinates = [LEFT_MIDDLE, MIDDLE_MIDDLE, MIDDLE_BOTTOM];
    const board = new Board(mineCoordinates);

    const [y, x] = LEFT_BOTTOM;
    board.stepOnSquare(y, x);

    expect(board.squares[y][x]).toBe('3');
  });
});
