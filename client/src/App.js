import React, { useEffect, useState } from "react";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
import Work from "./layout/Work";
import Education from "./layout/Education";
import Footer from "./layout/Footer";
import { EN_Content } from "./content/English";
import { ES_Content } from "./content/Spanish";
import { LightStyles } from "./content/LightStyles";
import { DarkStyles } from "./content/DarkStyles";
import "./App.css";
import Settings from "./components/Settings";

function App() {
  const [content, setContent] = useState({});
  const [styling, setStyling] = useState({});
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (language) {
      updateLanguage(language);
    } else {
      localStorage.setItem("language", "English");
      setContent(EN_Content);
      setLanguage("English");
    }
    if(theme){
      updateTheme(theme);
    } else {
      localStorage.setItem("theme", "light");
      setStyling(LightStyles);
      setLanguage("light");
    }
  }, []);

  const updateLanguage = (lang) => {
    setLanguage(lang);
    if (lang === "English") {
      setContent(EN_Content);
      localStorage.setItem("language", "English");
    } else {
      setContent(ES_Content);
      localStorage.setItem("language", "Spanish");
    }
  };

  const updateTheme = (theme) => {
    setTheme(theme);
    if (theme === "light") {
      setStyling(LightStyles);
      localStorage.setItem("theme", "light");
    } else {
      setStyling(DarkStyles);
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <div className="App" style={styling}>
      <header className="header">
        <div className="header-top">
          <p>GUSTAVO ZAPATA</p>
          <div style={{ marginTop: 20 }}>
            <Settings setLanguage={updateLanguage} setTheme={updateTheme} language={language} theme={theme} />
          </div>
        </div>
        <h1>{content.TITLE}</h1>
        <h3>{content.SUB_TITLE}</h3>
      </header>
      <main>
        <Skills />
        <Work />
        <Projects />
        <Education />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
