import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./styles/Projects.css";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="page">
        <h1>Projects</h1>
        <h3>All of my favorite projects</h3>
        <p>
          From my first Web Development book to a software engineering job in
          the heart of Silicon Valley, I have gained a wide range of
          <span> professional and technical skills.</span>
        </p>
        <main>
          {projects.map((project) => (
            <a
              href={`${project.link}`}
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
