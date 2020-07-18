import React from 'react';
import { sudokuBoards } from './sudokuBoards.js';
import PropTypes from 'prop-types';

const BoardMaker = ({ setGrid, showButtons, setShowButtons }) => {
  //FUNCTION TO TAKE IN STRINGS OF VALID SUDOKU BOARDS AND MAKE GRIDS
  let sudoStringHandler = (sudo) => {
    let random = Math.floor(Math.random() * sudokuBoards.length);
    let sudokuString = sudokuBoards[random];
    let board = [];
    for (let i = 0; i < 81; i += 9) {
      let row = sudokuString.slice(i, i + 9).split('');
      board.push(row.map((num) => Number(num)));
    }
    return board;
  };

  //FUNCTION TO GENERATE NUMBERS BASED ON DIFFICULTY
  const difficultySetting = (level) => {
    if (level === 'easy') level = 36;
    if (level === 'medium') level = Math.floor(Math.random() * (32 - 25)) + 25;
    if (level === 'hard') level = Math.floor(Math.random() * (23 - 18)) + 18;
    if (level === 'full') level = 81;
    return level;
  };

  //FUNCTION TO EMPTY A NUMBER OF INDICES ACCORDING TO DIFFICULTY LEVEL
  let boardMaker = (board, level) => {
    const coordsGen = () => {
      let x = Math.floor(Math.random() * 9);
      let y = Math.floor(Math.random() * 9);
      return [x, y];
    };

    let removeNum = 81 - level - 1;

    //IF SPOT CONTAINS NUMBER RECPLACE THAT INDEX WITH EMPTY STRING
    //This is where I should create a history board that can use to solve the whole puzzle or generate hints
    let i = removeNum;
    while (i >= 0) {
      let [x, y] = coordsGen();
      if (board[x][y] === '') {
        continue;
      }
      board[x][y] = '';
      i--;
    }
    return board;
  };

  //HANDLES ALL THREE DIFFICULTY BUTTONS
  const clickHandler = (e) => {
    let difficulty = difficultySetting(e.target.value);
    let solvedBoard = sudoStringHandler();
    let finalBoard = boardMaker(solvedBoard, difficulty);
    setGrid(finalBoard);
    setShowButtons(!showButtons);
  };

  return (
    <div align='center'>
      <button
        className='semi-trans'
        value='easy'
        href='!#'
        onClick={clickHandler}>
        Easy
      </button>
      <button
        className='semi-trans'
        value='medium'
        href='!#'
        onClick={clickHandler}>
        Medium
      </button>
      <button
        className='semi-trans'
        value='hard'
        href='!#'
        onClick={clickHandler}>
        Hard
      </button>
      <button
        className='semi-trans'
        value='full'
        href='!#'
        onClick={clickHandler}>
        Full Board
      </button>
    </div>
  );
};

BoardMaker.propTypes = {
  setGrid: PropTypes.func.isRequired,
  showButtons: PropTypes.bool.isRequired,
  setShowButtons: PropTypes.func.isRequired,
};
export default BoardMaker;
