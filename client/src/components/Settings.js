import React, { useState } from "react";
import Toggle from "./Toggle";

export default function Settings() {
  const [isEnglish, setIsEnglish] = useState(true);
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Toggle
          setting="language"
          isOn={isEnglish}
          setIsOn={() => setIsEnglish(!isEnglish)}
        />
        <p style={{ fontSize: ".6em" }}>EN</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Toggle
          setting="theme"
          isOn={isDark}
          setIsOn={() => setIsDark(!isDark)}
        />
        <img src={require("../images/dark.png")} alt="" style={{ width: 15 }} />
      </div>
    </div>
  );
}
