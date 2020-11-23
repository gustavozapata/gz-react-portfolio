import React, { useEffect, useState } from "react";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
import Work from "./layout/Work";
import Education from "./layout/Education";
import Footer from "./layout/Footer";
import { EN_Content } from "./content/English";
import { ES_Content } from "./content/Spanish";
import "./App.css";
import Toggle from "./components/Toggle";

function App() {
  const [content, setContent] = useState({});
  const [language, setLanguage] = useState(localStorage.getItem("language"));

  useEffect(() => {
    if (language) {
      updateLanguage(language);
    } else {
      localStorage.setItem("language", "English");
      setContent(EN_Content);
      setLanguage("English");
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

  return (
    <div className="App">
      <header className="header">
        <div className="header-top">
          <p>Gustavo Zapata</p>
          <Toggle />
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
      <Footer setLanguage={updateLanguage} />
    </div>
  );
}

export default App;
