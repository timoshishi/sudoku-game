import React, { useState, useEffect } from 'react';
import Table from './Table';
// import GridChecker from './GridChecker';
import BoardMaker from './BoardMaker';
import './App.css';
import { sudokuChecker } from './gridCheckerLogic';
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
];
//eslint-disable-next-line
let puzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],
  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],
  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

function App() {
  const [grid, setGrid] = useState(defaultGrid);
  const [validGrid, setValidGrid] = useState(false);
  const [showResults, setShowResults] = useState(null);
  const [showButtons, setShowButtons] = useState(true);
  useEffect(() => {
    setValidGrid(sudokuChecker(grid));
  }, [grid]);

  const checkBoardClickHandler = () => {
    setShowResults(!showResults);
    if (!validGrid) {
      setTimeout(() => {
        setShowResults(false);
      }, 2500);
    }
  };
  const newBoardClickHandler = () => {
    setGrid(defaultGrid);
    setShowButtons(!showButtons);
    setShowResults(false);
  };
  return (
    <div className='app'>
      {!showResults && <h3 className='app-header'>Sudoku?</h3>}{' '}
      {showResults && validGrid && <h4 className='results'>Valid Grid!</h4>}
      {showResults && !validGrid && <h4 className='results'>Failure!</h4>}
      <Table grid={grid} setGrid={setGrid} />
      {showButtons ? (
        <BoardMaker
          setGrid={setGrid}
          showButtons={showButtons}
          setShowButtons={setShowButtons}
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
      {/* For Future Reference */}
      {/* <GridChecker
        grid={grid}
        setGrid={setGrid}
        puzzle={puzzle}
        validGrid={validGrid}
        setValidGrid={setValidGrid}
      /> */}
      <img src='src\assets\sudoku-logo.png' alt='' />
    </div>
  );
}

export default App;
