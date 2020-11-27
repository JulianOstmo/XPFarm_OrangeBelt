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

  it('should be created with 1 mine in the central square', () => {
    const totalMines = board.mines.flat().reduce((count, cell) => {
      if (cell) {
        return count + 1;
      }
      return count;
    }, 0);
    expect(totalMines).toBe(1);
    expect(board.mines[1][1]).toBe(true);
  });
});

describe('Revealing square value', () => {
  it('should add explosion ("X") to board when bomb stepped on', () => {
    const [x, y] = [1, 1];
    const board = new Board();
    board.stepOnSquare(x, y);
    expect(board.squares[x][y]).toBe('X');
  });
});
