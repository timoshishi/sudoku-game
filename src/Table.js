import React, { useEffect } from 'react';
import TableData from './TableData';
const Table = ({ grid, setGrid }) => {
  useEffect(() => {
    setGrid(grid);
  }, [grid, setGrid]);

  const colors = (id) => {
    const idArr = id.split('-');
    if (idArr[0] < 3 && idArr[1] < 3) return 'section-1';
    if (idArr[0] < 3 && idArr[1] < 6) return 'section-2';
    if (idArr[0] < 3 && idArr[1] < 9) return 'section-3';
    if (idArr[0] < 6 && idArr[1] < 3) return 'section-4';
    if (idArr[0] < 6 && idArr[1] < 6) return 'section-5';
    if (idArr[0] < 6 && idArr[1] < 9) return 'section-6';
    if (idArr[0] < 9 && idArr[1] < 3) return 'section-7';
    if (idArr[0] < 9 && idArr[1] < 6) return 'section-8';
    if (idArr[0] < 9 && idArr[1] < 9) return 'section-9';
  };

  return (
    <div className='tg-wrap'>
      <table className='tg'>
        {grid.map((row, rowIdx) => {
          return (
            <tbody key={rowIdx}>
              {rowIdx >= 0 && rowIdx < 3 && (
                <tr>
                  {row.map((cell, cellIdx) => (
                    <TableData
                      key={`${rowIdx}-${cellIdx}`}
                      cellData={cell}
                      cellIdx={cellIdx}
                      rowIdx={rowIdx}
                      colors={colors}
                      setGrid={setGrid}
                      grid={grid}
                    />
                  ))}
                </tr>
              )}
              {rowIdx >= 3 && rowIdx < 6 && (
                <tr>
                  {row.map((cell, cellIdx) => (
                    <TableData
                      key={`${rowIdx}-${cellIdx}`}
                      cellData={cell}
                      cellIdx={cellIdx}
                      rowIdx={rowIdx}
                      colors={colors}
                      setGrid={setGrid}
                      grid={grid}
                    />
                  ))}
                </tr>
              )}
              {rowIdx >= 6 && rowIdx < 9 && (
                <tr>
                  {row.map((cell, cellIdx) => (
                    <TableData
                      key={`${rowIdx}-${cellIdx}`}
                      cellData={cell}
                      cellIdx={cellIdx}
                      rowIdx={rowIdx}
                      colors={colors}
                      setGrid={setGrid}
                      grid={grid}
                    />
                  ))}
                </tr>
              )}
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
