import React, { useEffect } from 'react';
import TableCell from './TableCell';
import PropTypes from 'prop-types';

const Table = ({ grid, setGrid, boardCopy }) => {
  useEffect(() => {
    setGrid(grid);
  }, [grid, setGrid]);

  return (
    <div>
      <table className='tg table-wrap'>
        <tbody>
          {grid.map((row, rowIdx) => {
            return (
              <tr key={rowIdx}>
                {row.map((cell, cellIdx) => {
                  return (
                    <TableCell
                      key={`${rowIdx}-${cellIdx}`}
                      cellData={cell}
                      cellIdx={cellIdx}
                      rowIdx={rowIdx}
                      setGrid={setGrid}
                      grid={grid}
                      boardCopy={boardCopy}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
Table.propTypes = {
  grid: PropTypes.array.isRequired,
  setGrid: PropTypes.func.isRequired,
};
export default Table;
