import React, { useState } from "react";
import Toggle from "./Toggle";

export default function Settings({setLanguage, setTheme, language, theme}) {
  const [isEnglish, setIsEnglish] = useState(language === 'English' ? true : false);
  const [isDark, setIsDark] = useState(theme === 'dark' ? true : false);

  const switchLanguage = () => {
    if(language === 'Spanish'){
      setLanguage("English");
      setIsEnglish(true);
    } else {
      setLanguage("Spanish");
      setIsEnglish(false);
    }
  }

  const switchTheme = () => {
    if(theme === 'light'){
      setTheme("dark");
      setIsDark(true)
    } else {
      setTheme("light");
      setIsDark(false)
    }
  }
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Toggle
          setting="language"
          isOn={isEnglish}
          setIsOn={switchLanguage}
        />
        <p style={{ fontSize: ".6em" }}>EN</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Toggle
          setting="theme"
          isOn={isDark}
          setIsOn={switchTheme}
        />
        <img src={require("../images/dark.png")} alt="" style={{ width: 15 }} />
      </div>
    </div>
  );
}
