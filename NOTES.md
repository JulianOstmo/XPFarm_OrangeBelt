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

- ✅ Add test to check board has 1 mine total and it is in the center of the board
- ✅ Add mines property to Board object
- ✅ Initialise board with 1 mine hardcoded to the center square
- ✅ Create player test and object
- Player steps on center square
- create test to check that Board prints with explosion ("X") in center square and message `[Sandbox 3x3] BOOM! - Game Over.`

# Tech Debt
- board.js squares are pre-printed
- need to create formatting and printing functions
- Board could be passed he output callback method (i.e. console.log)
- board.js squares should be a two dimensional array
- Mine could be it's own class
- Guards needed (e.g. if `x` or `y` passed is `null`)
