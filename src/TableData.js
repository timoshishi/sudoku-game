// eslint-disable-next-line
import React, { useRef, useEffect, useLayoutEffect } from 'react'
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
  // console.log(boardCopy
  useEffect(() => {
    if (boardCopy && typeof boardCopy[rowIdx][cellIdx] === 'number') {
      inputEl.current.disabled = true
    } else if (boardCopy !== null) {
      inputEl.current.disabled = false
    }
  }, [boardCopy])

  const changeHandler = (e) => {
    let newRow = [...grid[rowIdx]]
    newRow[cellIdx] = Number(e.target.value)
    let newGrid = [...grid]
    newGrid[rowIdx] = newRow
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
