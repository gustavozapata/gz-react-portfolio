import React, { useState, useEffect } from "react";
import { EN_Content } from "../content/English";
import { ES_Content } from "../content/Spanish";
import { LightStyles } from "../content/LightStyles";
import { DarkStyles } from "../content/DarkStyles";

const GZContext = React.createContext({});

export const GZProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const [content, setContent] = useState({});
  const [styling, setStyling] = useState({});

  useEffect(() => {
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !sessionStorage.getItem("dark-chose")
    ) {
      toggleTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      toggleTheme("light");
    } else {
      toggleTheme(localStorage.getItem("theme"));
    }

    if (localStorage.getItem("language") === null) {
      toggleLanguage("English");
    } else {
      toggleLanguage(localStorage.getItem("language"));
    }
  }, [isDark, isEnglish]);

  const toggleTheme = (mode) => {
    if (mode === "light") {
      setStyling(LightStyles);
      setIsDark(false);
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        sessionStorage.setItem("dark-chose", "yes");
      }
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
    if (isDark) {
      toggleTheme("light");
    } else {
      toggleTheme("dark");
    }
    setIsDark(!isDark);
  };

  const switchLanguage = () => {
    if (isEnglish) {
      toggleLanguage("Spanish");
    } else {
      toggleLanguage("English");
    }
    setIsEnglish(!isEnglish);
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
