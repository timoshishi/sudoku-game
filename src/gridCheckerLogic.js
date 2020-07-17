// eslint-disable-next-line
let validSection = [8, 9, 5, 7, 4, 2, 1, 3, 6];
// eslint-disable-next-line
let invalidSection = [8, 9, 5, 7, 4, 2, 1, 3, 1];
// eslint-disable-next-line
let invalidSection2 = ['', 9, 5, '', 4, 2, 1, 3, 1];
// eslint-disable-next-line
let puzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],

  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],

  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];
// eslint-disable-next-line
let puzzleClone = [
  ['', 2, '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', 1, '', '', '', '', '', '', ''],
];
// eslint-disable-next-line
let invalidPuzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [8, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],
  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],
  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

export const getRow = (grid, rowIdx) => {
  return grid[rowIdx];
};
const getColumn = (grid, columnIdx) => {
  let column = [];
  for (let i = 0; i < grid.length; i++) {
    let currRow = grid[i];

    let numFromCol = currRow[columnIdx];

    column.push(numFromCol);
  }
  return column.flat();
};
export const getSection = (grid, column, rowX) => {
  //most annoying, worked for 0,0 originally so made sudokuChecker, couldnt figure out why it only worked  at location 0,0, problem was start row was not being incremented with startIdx
  let section = [];
  let yIdx = 0;
  let startRow = 0;
  //check coord for where to start slicing
  if (column === 0) yIdx = 0;
  if (column === 1) yIdx = 3;
  if (column === 2) yIdx = 6;
  //finding that i needed to make rowX increment
  if (rowX === 0) startRow = 0;
  if (rowX === 1) startRow = 3;
  if (rowX === 2) startRow = 6;

  for (let i = startRow; i < startRow + 3; i++) {
    let currRow = grid[i];
    section.push(currRow[yIdx], currRow[yIdx + 1], currRow[yIdx + 2]);
  }
  return section;
};
export const includes1to9 = (subSection) => {
  for (let i = 1; i < 9; i++) {
    if (!subSection.includes(i)) return false;
  }
  return true;
};
//CHECK IF A SECTION CONTAINS MORE THAN ONE OF A NUMBER
export const noDupeSection = (subSection) => {
  let hash = {};
  for (let item of subSection) {
    if (item !== '') {
      if (hash[item] === undefined) {
        hash[item] = 1;
      } else {
        hash[item] += 1;
      }
      for (let key in hash) {
        if (hash[key] > 1) {
          return false;
        }
      }
    }
  }
  return true;
};
export const boardDuplicateChecker = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    if (!noDupeSection(getRow(grid, i))) return false;
    if (!noDupeSection(getColumn(grid, i))) return false;
  }
  //Double for loop to get through 1 - 3 on both input coords
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let currSection = getSection(grid, i, j);
      if (!noDupeSection(currSection)) {
        return false;
      }
    }
  }
  return true;
};
//CHECK WHOLE BOARD IS VALID
export const sudokuChecker = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    let currCol = getColumn(grid, i);

    if (!includes1to9(currCol)) {
      return false;
    }

    let currRow = getRow(grid, i);
    if (!includes1to9(currRow)) {
      return false;
    }
  }
  //Double for loop to get through 1 - 3 on both input coords
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let currSection = getSection(grid, i, j);
      if (!includes1to9(currSection)) {
        return false;
      }
    }
  }
  return true;
};
//CHECK EQUIVALENCY OF TWO BOARDS
export const isSame = (grid1, grid2) => {
  //Double For Loop check each entry against the other
  for (let i = 0; i < grid1.length; i++) {
    let currRow = grid1[i];
    let currRow2 = grid2[i];
    for (let j = 0; j < grid1.length; j++) {
      if (currRow[j] !== currRow2[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(boardDuplicateChecker(puzzleClone));
