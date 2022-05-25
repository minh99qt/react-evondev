import React from "react";
import Cell from "./Cell";
import "./GameStyle.css";
const Board = (props) => {
  console.log(props);
  return (
    <div className="caro-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : "O"}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
