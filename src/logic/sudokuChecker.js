const getRow = (grid, rowIdx) => {
  return grid[rowIdx];
};
const getColumn = (grid, columnIdx) => {
  const column = [];
  for (let i = 0; i < grid.length; i++) {
    const currRow = grid[i];
    const numFromCol = currRow[columnIdx];
    column.push(numFromCol);
  }
  return column;
};

const getSection = (grid, column, row) => {
  const startIdx = { 0: 0, 1: 3, 2: 6 };
  const section = [];
  const colIdx = startIdx[column];
  const rowIdx = startIdx[row];

  for (let i = rowIdx; i < rowIdx + 3; i++) {
    const currRow = grid[i];
    const currentSlice = currRow.slice(colIdx, colIdx + 3);
    section.push(...currentSlice);
  }
  return section;
};

const has1to9 = (subSection) => {
  for (let i = 1; i < 9; i++) {
    if (!subSection.includes(i)) return false;
  }
  return true;
};

const checkSection = (subSection) => {
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

const hasValidRows = (board) => {
  for (let i = 0; i < board.length; i++) {
    const currRow = getRow(board, i);
    if (!has1to9(currRow)) {
      return false;
    }
  }
  return true;
};

const hasValidCols = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    const currCol = getColumn(grid, i);
    if (!has1to9(currCol)) {
      return false;
    }
  }
  return true;
};

const hasValidSections = (grid) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const currSection = getSection(grid, i, j);
      if (!has1to9(currSection)) {
        return false;
      }
    }
  }
  return true;
};

export const validateBoard = (grid) => {
  if (hasValidCols(grid) && hasValidRows(grid) && hasValidSections(grid)) {
    return true;
  }
  return false;
};
