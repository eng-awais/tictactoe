import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square';
import '../../../assets/stylesheets/components/board.scss';

const Board = ({ squares, onClick }) =>
(
  // function onClick (e) {
  //   console.log(e)
  // }

  <div className='board-boxes'>
    { squares?.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
)

export default Board;
