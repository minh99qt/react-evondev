import React, { useState } from "react";
import { caroWinner } from "../../Helpers";
import Board from "./Board";

const Caro = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const handleClick = (index) => {
    const boradCopy = [...board];
    if (winner || boradCopy[index]) return;
    boradCopy[index] = xIsNext ? "X" : "O";
    setBoard(boradCopy);
    setxIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };
  const [xIsNext, setxIsNext] = useState(true);
  const winner = caroWinner(board);
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner && <div className="alert-winner">Winner is {winner} </div>}
      <button className="reset-game" onClick={handleResetGame}>
        Reset
      </button>
    </div>
  );
};
export default Caro;
