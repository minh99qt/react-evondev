import React from "react";
import { youtobeData } from "../../data";
import YoutobeItem from "./YoutobeItem";

const YoutobeList = (props) => {
  return (
    <div className="youtobe-list">
      {props.children}
      {youtobeData.map((item, index) => {
        let newClass = "";
        if (index === 2) newClass = "minhdz";
        return (
          <YoutobeItem
            key={item.id}
            img={item.img}
            avatar={item.avatar}
            title={item.title}
            name={item.name}
            className={newClass}
            // className={index === 2 ? "minhdz" : ""}
          ></YoutobeItem>
        );
      })}
    </div>
  );
};

export default YoutobeList;
