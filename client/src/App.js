import React, { useContext } from "react";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
import Work from "./layout/Work";
import Education from "./layout/Education";
import Footer from "./layout/Footer";
import Settings from "./components/Settings";
import GZContext from "./context/GZContext";
import "./App.css";

function App() {
  const { content, styling } = useContext(GZContext);

  return (
    <div className="App" style={styling.app}>
      <header className="header">
        <div className="header-top">
          <p style={styling.appSubtitle1}>Gustavo Zapata</p>
          <div style={{ marginTop: 20 }}>
            <Settings />
          </div>
        </div>
        <h1 style={styling.appTitle}>{content.TITLE}</h1>
        <h3 style={styling.appSubtitle2}>{content.SUB_TITLE}</h3>
      </header>
      <main>
        <Skills />
        <Work />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
