# Terminology

- board
- mines
- squares
- neighbour square
- step
- flag
- player

# Pomodoro 1

- Create board.test.js
- Write test to check for empty 3x3 board when board is created
- Spy on console.log
- Test should also check message is printed: `[Sandbox 3x3] Game created`
- Create Board class with constructor method
- Update Board class to print an empty board on creation

# Pomodoro 2

- Add bombs property to Board object
- Initialise board with 1 bomb hardcoded to the center square
- Create player test and object
- Player steps on center square
- Board prints board with explosion ("X") in center square and message `[Sandbox 3x3] BOOM! - Game Over.`

# Tech Debt
- board.js squares are pre-printed
- need to create formatting and printing functions
- board.js squares should be a two dimensional array
