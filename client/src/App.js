import React from "react";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
import Work from "./layout/Work";
import Education from "./layout/Education";
import Footer from "./layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <p>Gustavo Zapata</p>
        <h1>
          I’m passionate about the design and development of computer programs
        </h1>
        <h3>FULLSTACK DEVELOPER</h3>
      </header>
      <main>
        <Skills />
        <Projects />
        <Work />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
