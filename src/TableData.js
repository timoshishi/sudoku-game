// eslint-disable-next-line
import React, { useRef, useEffect } from 'react'
import { boardCopier } from './gridCheckerLogic'
import PropTypes from 'prop-types'

const TableData = ({
  cellData,
  cellIdx,
  rowIdx,
  colors,
  setGrid,
  grid,
  boardCopy,
}) => {
  const inputEl = useRef(null)
  useEffect(() => {
    //Checks whether cell should be rendered disabled. if it existed on the original board
    //'boardCopy' then it will be disabled
    if (boardCopy && typeof boardCopy[rowIdx][cellIdx] === 'number') {
      inputEl.current.disabled = true
    } else if (boardCopy !== null) {
      inputEl.current.disabled = false
    }
    // eslint-disable-next-line
  }, [boardCopy])

  //HANDLES INPUT ON INDIVIDUAL CELLS
  const changeHandler = (e) => {
    //makes copy of row
    let newRow = [...grid[rowIdx]]
    //sets row at current index to the change
    newRow[cellIdx] = Number(e.target.value)
    let newGrid = [...grid] //deep copy of grid
    newGrid[rowIdx] = newRow //replace row with new row
    setGrid(newGrid)
  }
  return (
    <td className={colors(`${rowIdx}-${cellIdx}`)}>
      <input
        className={colors(`${rowIdx}-${cellIdx}`)}
        value={cellData}
        onChange={changeHandler}
        disabled={false}
        ref={inputEl}
      />
    </td>
  )
}

TableData.propTypes = {
  cellIdx: PropTypes.number.isRequired,
  rowIdx: PropTypes.number.isRequired,
  colors: PropTypes.func.isRequired,
  grid: PropTypes.array.isRequired,
  setGrid: PropTypes.func.isRequired,
}

export default TableData
