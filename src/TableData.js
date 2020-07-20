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
  editable,
}) => {
  const inputEl = useRef(null)
  // useLayoutEffect(() => {
  //   if (!editable) inputEl.current.disabled = true
  // }, [])

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
