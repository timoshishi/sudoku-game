// eslint-disable-next-line
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const TableData = ({ cellData, cellIdx, rowIdx, colors, setGrid, grid }) => {
  // const inputEl = useRef(null);
  // useEffect(() => {
  //   if (typeof grid[rowIdx][cellIdx] === 'number') {
  //     inputEl.current.disabled = true;
  //     console.log(true);
  //   }
  // }, [grid]);
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
        disabled={false}
      />
    </td>
  );
};

TableData.propTypes = {
  cellIdx: PropTypes.number.isRequired,
  rowIdx: PropTypes.number.isRequired,
  colors: PropTypes.func.isRequired,
  grid: PropTypes.array.isRequired,
  setGrid: PropTypes.func.isRequired,
};

export default TableData;
