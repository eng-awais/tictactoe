import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { calculateWinner } from './helper';
import Board from './app/board';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = i => {
    const boardCopy = [...board];

    if (winner || boardCopy[i]) return;
    // If user click on occupied square or if game is won, return
    boardCopy[i] = xIsNext ? 'X' : 'O';
    // Put an X or an O in the clicked square
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  const jumpTo = () => {

  }

  const renderMoves = () => (
    <button className='btn-start-game' onClick={() => setBoard(Array(9).fill(null))}>
      Start Game
    </button>
  )

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div className='output-box'>
        <p className='player-info' >{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')} </p>
        {renderMoves()}
      </div>
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Game />,
    document.body.appendChild(document.createElement('div')),
  )
})

export default Game;
