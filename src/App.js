import React, { useState, useEffect } from 'react'
import Table from './Table'
// import GridChecker from './GridChecker';
import BoardMaker from './BoardMaker'
import './App.css'
import { sudokuChecker } from './gridCheckerLogic'
// eslint-disable-next-line
const defaultGrid = [
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
]

function App() {
  const [grid, setGrid] = useState(defaultGrid)
  const [validGrid, setValidGrid] = useState(false)
  const [showResults, setShowResults] = useState(null)
  const [showButtons, setShowButtons] = useState(true)
  const [boardCopy, setBoardCopy] = useState(null)

  //Keeps watch for valid grid
  useEffect(() => {
    setValidGrid(sudokuChecker(grid))
  }, [grid])

  //CHECKS IF GRID IS VALID ON CLICK - REMOVES RESULTS AFTER 2.5 SECONDS if failing
  const checkBoardClickHandler = () => {
    setShowResults(!showResults)
    if (!validGrid) {
      setTimeout(() => {
        setShowResults(false)
      }, 2500)
    }
  }
  //SETS NEW BOARD TO EMPTY, CHANGES VIEW TO BoardMaker
  const newBoardClickHandler = () => {
    setGrid(defaultGrid)
    setShowButtons(!showButtons)
    setShowResults(false)
    setBoardCopy(null)
  }
  return (
    <div className='app'>
      {!showResults && <h3 className='app-header'>Sudoku?</h3>}{' '}
      {showResults && validGrid && <h4 className='results'>Valid Grid!</h4>}
      {showResults && !validGrid && <h4 className='results'>Failure!</h4>}
      <Table grid={grid} setGrid={setGrid} boardCopy={boardCopy} />
      {showButtons ? (
        <BoardMaker
          setGrid={setGrid}
          showButtons={showButtons}
          setShowButtons={setShowButtons}
          setBoardCopy={setBoardCopy}
        />
      ) : (
        <>
          <div align='center'>
            <button className='semi-trans' onClick={checkBoardClickHandler}>
              Check Board
            </button>
            <button className='semi-trans' onClick={newBoardClickHandler}>
              New Game
            </button>
          </div>
        </>
      )}
      <img src='src\assets\sudoku-logo.png' alt='' />
    </div>
  )
}

export default App
