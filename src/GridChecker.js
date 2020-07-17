import React, { useState } from 'react';
import { sudokuChecker } from './gridCheckerLogic';
const GridChecker = ({ grid, setGrid, puzzle, setValidGrid }) => {
  const [gridToCheck, setGridToCheck] = useState('');
  //   useEffect(() => {
  //     if (gridToCheck) {
  //       console.log(sudokuChecker(puzzle));
  //     }
  //   }, [gridToCheck]);
  const [valid, setValid] = useState(false);
  const stringHandler = (gridToCheck) => {
    let reg = /[0-9]/g;
    let numStr = gridToCheck.match(reg);
    let newGrid = [];
    if (numStr === null) return;
    if (numStr.length !== 81) return;

    let numArr = numStr.map((i) => Number(i));
    for (let i = 0; i < 81; i += 9) {
      let sliced = numArr.slice(i, i + 9);
      newGrid.push(sliced);
    }
    setValid(sudokuChecker(newGrid));
    if (sudokuChecker(newGrid)) {
      setGrid(newGrid);
    }

    setGridToCheck('');
  };
  const submitHandler = (e) => {
    e.preventDefault();

    // need to
    setGridToCheck(e.target.value);
    stringHandler(gridToCheck);
  };

  return (
    <form onSubmit={submitHandler}>
      <textarea
        name='grid'
        id=''
        cols='30'
        rows='10'
        placeholder='Paste Your Grid Here'
        value={gridToCheck || ''}
        onChange={(e) => setGridToCheck(e.target.value)}></textarea>
      <button type='submit'>Validate your board!</button>
      {valid ? <h1>VALID</h1> : <h1>NOT</h1>}
    </form>
  );
};

export default GridChecker;
