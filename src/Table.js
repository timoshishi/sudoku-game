import React, { useEffect } from 'react'
import TableData from './TableData'
import PropTypes from 'prop-types'

const Table = ({ grid, setGrid, boardCopy }) => {
  useEffect(() => {
    setGrid(grid)
  }, [grid, setGrid])
  //Set Colors Dynamically depending on id/grid coordinates
  const colors = (id) => {
    const idArr = id.split('-')
    ///preserving in separate sections for now in case I need more granular control
    if (idArr[0] < 3 && idArr[1] < 3) return 'section-1'
    if (idArr[0] < 3 && idArr[1] < 6) return 'section-2'
    if (idArr[0] < 3 && idArr[1] < 9) return 'section-3'
    if (idArr[0] < 6 && idArr[1] < 3) return 'section-4'
    if (idArr[0] < 6 && idArr[1] < 6) return 'section-5'
    if (idArr[0] < 6 && idArr[1] < 9) return 'section-6'
    if (idArr[0] < 9 && idArr[1] < 3) return 'section-7'
    if (idArr[0] < 9 && idArr[1] < 6) return 'section-8'
    if (idArr[0] < 9 && idArr[1] < 9) return 'section-9'
  }

  return (
    <div>
      <table className='tg table-wrap'>
        <tbody>
          {grid.map((row, rowIdx) => {
            //2d array so needs to be mapped twice
            //get indexes from both maps to set the cell key/id number as its grid coordinates
            return (
              <tr key={rowIdx}>
                {row.map((cell, cellIdx) => {
                  return (
                    <TableData
                      key={`${rowIdx}-${cellIdx}`}
                      cellData={cell}
                      cellIdx={cellIdx}
                      rowIdx={rowIdx}
                      colors={colors}
                      setGrid={setGrid}
                      grid={grid}
                      boardCopy={boardCopy}
                    />
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
Table.propTypes = {
  grid: PropTypes.array.isRequired,
  setGrid: PropTypes.func.isRequired,
}
export default Table
