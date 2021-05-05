import React, { useState, useEffect } from 'react';
import Table from './Table';
import BoardButtons from './BoardButtons';
import './App.css';
import { emptyBoardMaker } from './logic/boardCreation';
import { validateBoard } from './logic/sudokuChecker';

function App() {
  const [grid, setGrid] = useState(emptyBoardMaker());
  const [validGrid, setValidGrid] = useState(false);
  const [showResults, setShowResults] = useState(null);
  const [showButtons, setShowButtons] = useState(true);
  const [boardCopy, setBoardCopy] = useState(null);

  useEffect(() => {
    setValidGrid(validateBoard(grid));
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
    setGrid(emptyBoardMaker());
    setShowButtons(!showButtons);
    setShowResults(false);
    setBoardCopy(null);
  };

  return (
    <div className='app'>
      {!showResults && <h3 className='app-header'>Sudoku?</h3>}{' '}
      {showResults && validGrid && <h4 className='results'>Valid Grid!</h4>}
      {showResults && !validGrid && <h4 className='results'>Failure!</h4>}
      <Table grid={grid} setGrid={setGrid} boardCopy={boardCopy} />
      {showButtons ? (
        <BoardButtons
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
  );
}

export default App;
