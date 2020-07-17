import React from 'react';
import { sudokuBoards } from './sudokuBoards.js';
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
    if (level === 'medium') level = Math.floor(Math.random() * (33 - 27)) + 26;
    if (level === 'hard') level = Math.floor(Math.random() * (25 - 20)) + 19;
    if (level === 'full') level = 81;
    return level;
  };

  //FUNCTION TO EMPTY A NUMBER OF INDICES ACCORDING TO LEVEL
  let boardMaker = (board, num) => {
    const numGen = () => {
      let x = Math.floor(Math.random() * 9);
      let y = Math.floor(Math.random() * 9);
      return [x, y];
    };

    let removeNum = 81 - num;
    let i = removeNum - 1;
    while (i >= 0) {
      let [x, y] = numGen();
      if (board[x][y] === '') {
        continue;
      }
      board[x][y] = '';
      i--;
    }
    return board;
  };
  const clickHandler = (e) => {
    let difficulty = difficultySetting(e.target.value);
    let fullBoard = sudoStringHandler();
    let finalBoard = boardMaker(fullBoard, difficulty);
    setGrid(finalBoard);
    setShowButtons(!showButtons);
    console.log(fullBoard);
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

export default BoardMaker;
