import React, { useState, useEffect } from "react";
import { EN_Content } from "../content/English";
import { ES_Content } from "../content/Spanish";
import { LightStyles } from "../content/LightStyles";
import { DarkStyles } from "../content/DarkStyles";

const GZContext = React.createContext({});

export const GZProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const [isEnglish, setIsEnglish] = useState(
    localStorage.getItem("language") === "English" ? true : false
  );
  const [content, setContent] = useState({});
  const [styling, setStyling] = useState({});

  useEffect(() => {
    if (isDark === null) {
      toggleTheme("light");
    } else {
      toggleTheme(localStorage.getItem("theme"));
    }
    if (isEnglish === null) {
      toggleLanguage("English");
    } else {
      toggleLanguage(localStorage.getItem("language"));
    }
  }, [isDark, isEnglish]);

  const toggleTheme = (mode) => {
    if (mode === "light") {
      setStyling(LightStyles);
      setIsDark(false);
    } else {
      setStyling(DarkStyles);
      setIsDark(true);
    }
    localStorage.setItem("theme", mode);
  };

  const toggleLanguage = (lang) => {
    if (lang === "English") {
      setContent(EN_Content);
      setIsEnglish(true);
    } else {
      setContent(ES_Content);
      setIsEnglish(false);
    }
    localStorage.setItem("language", lang);
  };

  const switchTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      toggleTheme("light");
    } else {
      toggleTheme("dark");
    }
  };

  const switchLanguage = () => {
    setIsEnglish(!isEnglish);
    if (!isEnglish) {
      toggleLanguage("English");
    } else {
      toggleLanguage("Spanish");
    }
  };

  return (
    <GZContext.Provider
      value={{
        content,
        styling,
        isDark,
        isEnglish,
        switchTheme,
        switchLanguage,
      }}
    >
      {children}
    </GZContext.Provider>
  );
};

export default GZContext;
