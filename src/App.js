import React, { useContext, useState, useEffect } from "react";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
import Work from "./layout/Work";
import Education from "./layout/Education";
import Footer from "./layout/Footer";
import Settings from "./components/Settings";
import { getAllContentfulData } from "./services";
import GZContext from "./context/GZContext";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const { content, styling } = useContext(GZContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllContentfulData();
      setProjects(result.projects);
      setSkills(result.skills);
    };
    fetchData();
  }, []);

  return (
    <div className="App" style={styling.app}>
      <header className="header">
        <div className="header-top">
          <p style={styling.aguamarina}>Gustavo ZapataQ</p>
          <div>
            <Settings />
          </div>
        </div>
        {/* <h1 style={styling.amarillo}>{content.TITLE}</h1> */}
        {/* <h3 style={styling.rosado}>{content.SUB_TITLE}</h3> */}
      </header>
      <main>
        <Skills skillsCMS={skills} />
        <Work />
        <Projects projects={projects} />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
