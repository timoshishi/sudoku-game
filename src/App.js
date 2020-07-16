import React, { useState, useEffect } from 'react';
import Table from './Table';
import GridChecker from './GridChecker';
import './App.css';
import { sudokuChecker } from './gridCheckerLogic';

const defaultTable = [
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
  const [grid, setGrid] = useState(puzzle);
  const [validGrid, setValidGrid] = useState(false);
  const [showResults, setShowResults] = useState(null);
  useEffect(() => {
    setValidGrid(sudokuChecker(grid));
  }, [grid]);
  const clickHandler = () => {
    setShowResults(!showResults);
  };

  return (
    <div className='App'>
      {validGrid ? <h1>VALID</h1> : <h1>NOOqerfwOOOOOO</h1>}
      <Table grid={grid} setGrid={setGrid} />
      <button onClick={clickHandler}>Check Board!</button>
      <GridChecker
        grid={grid}
        setGrid={setGrid}
        puzzle={puzzle}
        validGrid={validGrid}
        setValidGrid={setValidGrid}
      />
    </div>
  );
}

export default App;
