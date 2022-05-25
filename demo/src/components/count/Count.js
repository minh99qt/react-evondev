import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const HandleIncrement = () => {
    console.log("ckicked");
    setTimeout(function Delay() {
      setCount((count) => count + 1);
    }, 1000);
  };
  return (
    <div>
      <button
        style={{
          background: "orange",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={HandleIncrement}
      >
        Increment - {count}
      </button>
    </div>
  );
};

export default Count;
