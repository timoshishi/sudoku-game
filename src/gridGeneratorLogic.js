import { boardDuplicateChecker } from './gridCheckerLogic';

// eslint-disable-next-line
const defaultTable = [
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
];

const difficultySetting = (level) => {
  if (level === 'easy') level = 36;
  if (level === 'medium') level = Math.floor(Math.random() * (33 - 27)) + 26;
  if (level === 'hard') level = Math.floor(Math.random() * (25 - 20)) + 19;
  return level;
};

const coordinateGen = () => {
  const x = Math.floor(Math.random() * 9);
  const y = Math.floor(Math.random() * 9);
  return [x, y];
};
const emptyGridMaker = () => {
  let grid = [];
  let row = [];
  for (let i = 0; i < 9; i++) {
    row.push('');
  }
  for (let i = 0; i < 9; i++) {
    grid.push(row);
  }
  return grid;
};
const boardCopier = (board) => {
  let copy = [];
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    let newRow = [];
    for (let j = 0; j < board.length; j++) {
      newRow.push(row[j]);
    }
    copy.push(newRow);
  }
  return copy;
};

const startingGridBuilder = (difficulty) => {
  //create empty 9x9 grid of empty strings
  let returnBoard = emptyGridMaker();

  //this returns the number of squares to fill based on difficulty (easy is hard coded 36), the rest are random in a range
  let filledSquares = difficultySetting('easy');

  //function running inside main function so it can be called recursively?
  const numberPlacer = (num) => {
    if (num === 0) {
      return returnBoard;
    }
    //generate new coordinates on each iteration
    let [x, y] = coordinateGen();
    //deep copy the return board
    let localBoard = boardCopier(returnBoard);
    // if board space is available
    if (localBoard[x][y] === '') {
      //place a random number 0 - 8 into the coords in local board
      localBoard[x][y] = Math.floor(Math.random() * 9);
      //run validator after placing new number at coords
      let validBoard = boardDuplicateChecker(localBoard);
      if (!validBoard) {
        //reset the square that caused it to fail
        localBoard[x][y] = '';

        //if dupes exist, run number placer again until valid spot is found
        localBoard = numberPlacer(num - 1);
      }
      //if the board check is valid, deep copy the updated local board to the returnBoard that exists outside this function
      else returnBoard = boardCopier(localBoard);
    }
    //invokes numberPlacer and returns the result
    numberPlacer(filledSquares);
  };
  //after loop has finished and filled the appropriate amt of squares
  return returnBoard();
};

// let [x,y] = coordinateGen()

//Each functions generates random numbers between 1 + 9
// generates coordinates
//has history to check if coordinates have been used
//has to use row, col, section validators each time when placing into the new position, if not, generate new coords
//
