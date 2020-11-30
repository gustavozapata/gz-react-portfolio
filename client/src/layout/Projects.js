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
        <h3 style={styling.aguamarina}>All of my favorite projects</h3>
        <p style={styling.gris}>
          From my first Web Development book to a software engineering job in
          the heart of Silicon Valley, I have gained a wide range of
          <span> professional and technical skills.</span>
        </p>
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
