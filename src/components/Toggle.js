import React from "react";
import "./styles/Toggle.css";

const Toggle = ({ setting, isOn, setIsOn }) => {
  return (
    <div className="Toggle">
      <input
        type="checkbox"
        name={setting}
        className="mobileToggle"
        id={setting}
        checked={isOn}
        onChange={setIsOn}
      />
      <label htmlFor={setting}></label>
    </div>
  );
};

export default Toggle;
