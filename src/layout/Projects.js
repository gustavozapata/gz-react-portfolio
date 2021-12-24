import React, { useContext, useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import GZContext from "../context/GZContext";
import { getAllContentfulData } from "../services";
import "./styles/Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const { styling } = useContext(GZContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllContentfulData();
      setProjects(result);
    };
    fetchData();
  }, []);

  return (
    <div className="Projects" style={styling.section}>
      <div className="page">
        <h1 style={styling.morado}>Projects</h1>
        <h3 style={styling.gris}>
          Freelancing, personal projects and hackathons
        </h3>
        <main>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectCard project={project} key={project.id} />
            </a>
          ))}
        </main>
      </div>
    </div>
  );
}
