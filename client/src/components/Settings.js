import React, { useContext } from "react";
import Toggle from "./Toggle";
import GZContext from "../context/GZContext";
import "./styles/Settings.css";

export default function Settings() {
  const {
    isEnglish,
    isDark,
    switchLanguage,
    switchTheme,
    styling,
  } = useContext(GZContext);

  const getImage = () => {
    if (isDark) {
      return require("../images/dark.png");
    }
    return require("../images/dark0.png");
  };

  return (
    <div className="Settings">
      <div className="toggleContainer">
        <Toggle setting="language" isOn={isEnglish} setIsOn={switchLanguage} />
        <p style={styling.gris}>EN</p>
      </div>
      <div className="toggleContainer">
        <Toggle setting="theme" isOn={isDark} setIsOn={switchTheme} />
        <img src={getImage()} alt="Moon icon" />
      </div>
    </div>
  );
}
