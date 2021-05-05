import React, { useRef, useEffect } from 'react';
import { boardCopier } from './logic/boardCreation';
import PropTypes from 'prop-types';
import { getSectionColor } from './logic/getSectionColor';

const TableCell = ({ cellData, cellIdx, rowIdx, setGrid, grid, boardCopy }) => {
  const inputEl = useRef(null);
  useEffect(() => {
    //Checks whether cell should be rendered disabled. if it existed on the original board
    //'boardCopy' then it will be disabled
    if (boardCopy && typeof boardCopy[rowIdx][cellIdx] === 'number') {
      inputEl.current.disabled = true;
    } else if (boardCopy !== null) {
      inputEl.current.disabled = false;
    }
  }, [boardCopy]);

  const changeHandler = (e) => {
    //makes copy of row
    let newRow = [...grid[rowIdx]];
    //sets row at current index to the change
    newRow[cellIdx] = Number(e.target.value);
    let newGrid = boardCopier(grid); //deep copy of grid
    newGrid[rowIdx] = newRow; //replace row with new row
    setGrid(newGrid);
  };
  return (
    <td className={getSectionColor(`${rowIdx}-${cellIdx}`)}>
      <input
        className={getSectionColor(`${rowIdx}-${cellIdx}`)}
        value={cellData}
        onChange={changeHandler}
        disabled={false}
        ref={inputEl}
      />
    </td>
  );
};

TableCell.propTypes = {
  cellIdx: PropTypes.number.isRequired,
  rowIdx: PropTypes.number.isRequired,
  grid: PropTypes.array.isRequired,
  setGrid: PropTypes.func.isRequired,
};

export default TableCell;
