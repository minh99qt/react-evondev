import React from "react";

const Cell = (props) => {
  return (
    <div className={`caro-cell ${props.className}`} onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
