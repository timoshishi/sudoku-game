import React from 'react';
// import { sudokuBoards } from './logic/sudokuBoards.js';
import { boardCopier } from './logic/boardCreation';
import {
  difficultySetting,
  sudoStringHandler,
  createEmptyIndices,
} from './logic/boardCreation';
import PropTypes from 'prop-types';

const BoardButtons = ({
  setGrid,
  showButtons,
  setShowButtons,
  setBoardCopy,
}) => {
  // //FUNCTION TO TAKE IN STRINGS OF VALID SUDOKU BOARDS AND MAKE GRIDS
  // let sudoStringHandler = (sudo) => {
  //   let random = Math.floor(Math.random() * sudokuBoards.length);
  //   let sudokuString = sudokuBoards[random];
  //   let board = [];
  //   for (let i = 0; i < 81; i += 9) {
  //     let row = sudokuString.slice(i, i + 9).split('');
  //     board.push(row.map((num) => Number(num)));
  //   }
  //   return board;
  // };

  // //FUNCTION TO GENERATE NUMBERS BASED ON DIFFICULTY
  // const difficultySetting = (level) => {
  //   if (level === 'easy') level = 36;
  //   if (level === 'medium') level = Math.floor(Math.random() * (32 - 25)) + 25;
  //   if (level === 'hard') level = Math.floor(Math.random() * (23 - 18)) + 18;
  //   if (level === 'full') level = 80;
  //   return level;
  // };

  // //FUNCTION TO EMPTY A NUMBER OF INDICES ACCORDING TO DIFFICULTY LEVEL
  // let createEmptyIndices = (board, level) => {
  //   const coordsGen = () => {
  //     let x = Math.floor(Math.random() * 9);
  //     let y = Math.floor(Math.random() * 9);
  //     return [x, y];
  //   };
  //   let removeNum = 81 - level - 1;

  //   //IF SPOT CONTAINS NUMBER REPLACE THAT INDEX WITH EMPTY STRING
  //   //This is where I should create a history board that can use to solve the whole puzzle or generate hints
  //   let i = removeNum;
  //   while (i >= 0) {
  //     let [x, y] = coordsGen();
  //     if (board[x][y] === '') {
  //       continue;
  //     }
  //     board[x][y] = '';
  //     i--;
  //   }
  //   return board;
  // };

  //HANDLES ALL THREE DIFFICULTY BUTTONS
  const clickHandler = (e) => {
    const difficulty = difficultySetting(e.target.value);
    const solvedBoard = sudoStringHandler();
    const finalBoard = createEmptyIndices(solvedBoard, difficulty);
    //copies board so that each cell can check whether it should be disabled or not
    const startingBoardCopy = boardCopier(finalBoard);
    setBoardCopy(startingBoardCopy);
    setGrid(finalBoard);
    //button view goes back to 'new game' and 'check board'
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
        Full Board - 1
      </button>
    </div>
  );
};

BoardButtons.propTypes = {
  setGrid: PropTypes.func.isRequired,
  showButtons: PropTypes.bool.isRequired,
  setShowButtons: PropTypes.func.isRequired,
};
export default BoardButtons;
