import React from "react";
const Youtobe = (props) => {
  return (
    <div className={`youtobe-item ${props.className}`}>
      <div className="youtobe-img">
        <img src={props.img} alt="" />
      </div>
      <div className="youtobe-footer">
        <img src={props.avatar} alt="" className="avatar" />
        <div className="info">
          <div className="title">{props.title}</div>
          <div className="name">{props.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Youtobe;
