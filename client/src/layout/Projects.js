import React, { useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";
import GZContext from "../context/GZContext";
import "./styles/Projects.css";

export default function Projects() {
  const { styling } = useContext(GZContext);

  return (
    <div className="Projects" style={styling.section}>
      <div className="page">
        <h1 style={styling.morado}>Projects</h1>
        <h3 style={styling.gris}>
          Freelancing, personal projects and hackathons
        </h3>
        {/* <p style={styling.gris}>
          A full list of projects can be found on my
          <span> GitHub profile</span>
        </p> */}
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
