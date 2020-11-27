# Terminology

- board
- mines
- squares
- neighbour square
- clear square
- step
- flag
- player

# Pomodoro 1

- ✅ Create board.test.js
- ✅ Write test to check for empty 3x3 board when board is created
- ✅ Spy on console.log
- ✅ Test should also check message is printed: `[Sandbox 3x3] Game created`
- ✅ Create Board class with constructor method
- ✅ Update Board class to print an empty board on creation

# Pomodoro 2

- ✅ Add test to check board has 1 mine total and it is in the center of the board
- ✅ Add mines property to Board object
- ✅ Initialise board with 1 mine hardcoded to the center square
- ✅ Create player test and object


# Pomodoro 3

- ✅ Player steps on center square
- ✅ create test to check that Board prints with explosion ("X") in center square and message `[Sandbox 3x3] BOOM! - Game Over.`
- ✅ TECHDEBT - board.js squares are pre-printed
- ✅ TECHDEBT - need to create formatting and printing functions
- ✅ TECHDEBT - board.js squares should be a two dimensional array
- ✅ Fix test coverage

# Pomodoro 4
- ✅ must be able to assign mine location on Board initialisation
- ✅ check stepped on square if it is a mine or clear
- ✅ if square is clear, show number of mines square touches
- ✅ update message with number of neighbouring mines

# Tech Debt
- Board should be initialised with it's size (e.g. 3x3);
- Board could be passed he output callback method (i.e. console.log)
- Mine could be it's own class
- Guards needed (e.g. if `x` or `y` passed is `null`)
- Board.countNeighbouringMines() is hardcoded
