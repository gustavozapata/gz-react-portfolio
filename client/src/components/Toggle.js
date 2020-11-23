import React from "react";
import "./styles/Toggle.css";

const Toggle = () => {
  return (
    <div className="Toggle">
      <input
        type="checkbox"
        name="toggle1"
        className="mobileToggle"
        id="toggle1"
      />
      <label for="toggle1"></label>
    </div>
  );
};

export default Toggle;
