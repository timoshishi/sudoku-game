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
  };
  const newBoardClickHandler = () => {
    setGrid(defaultGrid);
    setShowButtons(!showButtons);
    setShowResults(false);
  };
  return (
    <div className='App'>
      {showResults && validGrid ? (
        <h1>Valid Grid!</h1>
      ) : (
        <h1 style={{ visibility: 'hidden' }}>placeholder</h1>
      )}
      {showResults && !validGrid && <h1>Failure!</h1>}
      <Table grid={grid} setGrid={setGrid} />
      {showButtons ? (
        <BoardMaker
          setGrid={setGrid}
          showButtons={showButtons}
          setShowButtons={setShowButtons}
        />
      ) : (
        <>
          <button onClick={checkBoardClickHandler}>Check Board!</button>
          <button onClick={newBoardClickHandler}>New Board!</button>
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
    </div>
  );
}

export default App;
