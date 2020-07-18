//OLD FUNCTIONS BUT MAY USE LATER FOR HISTORY FEATURE
// eslint-disable-next-line
const emptyBoardMaker = () => {
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
// eslint-disable-next-line
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
