import { sudokuBoards } from './sudokuBoards.js';

//FUNCTION TO TAKE IN STRINGS OF VALID SUDOKU BOARDS AND MAKE GRIDS
export const sudoStringHandler = (sudo) => {
  const random = Math.floor(Math.random() * sudokuBoards.length);
  const sudokuString = sudokuBoards[random];
  const board = [];
  for (let i = 0; i < 81; i += 9) {
    const row = sudokuString.slice(i, i + 9).split('');
    board.push(row.map((num) => Number(num)));
  }
  return board;
};

//FUNCTION TO GENERATE NUMBERS BASED ON DIFFICULTY
export const difficultySetting = (level) => {
  if (level === 'easy') level = 36;
  if (level === 'medium') level = Math.floor(Math.random() * (32 - 25)) + 25;
  if (level === 'hard') level = Math.floor(Math.random() * (23 - 18)) + 18;
  if (level === 'full') level = 80;
  return level;
};

//FUNCTION TO EMPTY A NUMBER OF INDICES ACCORDING TO DIFFICULTY LEVEL
export const createEmptyIndices = (board, level) => {
  const coordsGen = () => {
    const x = Math.floor(Math.random() * 9);
    const y = Math.floor(Math.random() * 9);
    return [x, y];
  };
  const removeNum = 81 - level - 1;

  //IF SPOT CONTAINS NUMBER REPLACE THAT INDEX WITH EMPTY STRING
  //This is where I should create a history board that can use to solve the whole puzzle or generate hints
  let i = removeNum;
  while (i >= 0) {
    const [x, y] = coordsGen();
    if (board[x][y] === '') {
      continue;
    }
    board[x][y] = '';
    i--;
  }
  return board;
};

//create a deep copy of a board
export const boardCopier = (board) => {
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

export const emptyBoardMaker = () => {
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
