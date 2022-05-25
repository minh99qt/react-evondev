import React, { useState } from "react";
import "./ToggleStyle.css";
export default function Toggle() {
  const [on, set0n] = useState(false);
  const handleToggle = () => {
    set0n((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div
          className={`spinner ${on ? "active" : ""}`}
          onClick={handleToggle}
        ></div>
      </div>
      <div className="toggle-control">
        <div className="on">OFF</div>
        <div className="off">ON</div>
      </div>
    </div>
  );
}
