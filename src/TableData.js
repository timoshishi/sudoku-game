import React from 'react';

const TableData = ({ cellData, cellIdx, rowIdx, colors, setGrid, grid }) => {
  const changeHandler = (e) => {
    let newRow = [...grid[rowIdx]];
    newRow[cellIdx] = Number(e.target.value);
    let newGrid = [...grid];
    newGrid[rowIdx] = newRow;
    setGrid(newGrid);
  };

  return (
    <td className={colors(`${rowIdx}-${cellIdx}`)}>
      <input
        className={colors(`${rowIdx}-${cellIdx}`)}
        value={cellData}
        onChange={changeHandler}
      />
    </td>
  );
};

export default TableData;
