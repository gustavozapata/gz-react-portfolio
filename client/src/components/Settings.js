import React, { useContext } from "react";
import Toggle from "./Toggle";
import GZContext from "../context/GZContext";
import "./styles/Settings.css";

export default function Settings() {
  const { isEnglish, isDark, switchLanguage, switchTheme } = useContext(
    GZContext
  );

  return (
    <div className="Settings">
      <div className="toggleContainer">
        <Toggle setting="language" isOn={isEnglish} setIsOn={switchLanguage} />
        <p>EN</p>
      </div>
      <div className="toggleContainer">
        <Toggle setting="theme" isOn={isDark} setIsOn={switchTheme} />
        <img src={require("../images/dark.png")} alt="Moon icon" />
      </div>
    </div>
  );
}
