import { useState } from "react";

import "./App.css";

function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>

    // function handleClick() {
    //   // console.log("clicked");
    //   setValue("x");
    // }
    // return (
    //   <button className="square" onClick={handleClick}>
    //     {value}
    //   </button>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // vertical
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonal
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  if (squares.every((square) => square !== null)) {
    return { winner: "draw" };
  }
  return null;
}
function getLocation(move) {
  const row = Math.floor(move / 3) + 1;
  const col = (move % 3) + 1;
  return `(row: ${row}, col: ${col})`;
}

function Board({ squares, xIsNext, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    onPlay(newSquares);
  }

  const winnerInfo = calculateWinner(squares);
  let status;
  let winningLine = [];
  if (winnerInfo) {
    if (winnerInfo.winner === "draw") {
      status = "It's a draw!";
    } else {
      status = "Winner: " + winnerInfo.winner;
      winningLine = winnerInfo.line;
    }
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function renderSquare(i) {
    const isWinningSquare = winningLine.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        onSquareClick={() => handleClick(i)}
        isWinningSquare={isWinningSquare}
      />
    );
  }

  const boardRows = [];
  for (let row = 0; row < 3; row++) {
    const boardRow = [];
    for (let col = 0; col < 3; col++) {
      const squareIndex = row * 3 + col;
      boardRow.push(renderSquare(squareIndex));
    }
    boardRows.push(<div className="board-row">{boardRow}</div>);
  }

  return (
    <>
      <div className="status">{status}</div>
      {boardRows}
    </>
  );
}

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move} ${getLocation(move - 1)}` : "Go to game start";;
    return (
      <li key={move}>
        {move === currentMove ? (
          <span>You are at move #{move}</span>
        ) : (
          <button onClick={() => jumpTo(move)}>{desc}</button>
        )}
      </li>
    );
  });

  const sortedMoves = isAscending ? moves : moves.slice().reverse();

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div>
          <button onClick={() => setIsAscending(!isAscending)}>
            {isAscending ? "Sort Descending" : "Sort Ascending"}
          </button>
        </div>
        <div>{/* status */}</div>
        <ol>{sortedMoves}</ol>
      </div>
    </div>
  );
}

export default Game;
