import React, { useContext } from "react";
import GZContext from "../context/GZContext";
import "./styles/ProjectCard.css";

export default function ProjectCard({ project }) {
  const { styling } = useContext(GZContext);
  const { name, type, technologies, identifier, image } = project;

  const addImage = (tech) => {
    tech = tech.toLowerCase().replace(/\s/g, "");
    return require(`../images/${tech}.png`);
  };

  return (
    <div
      className={`ProjectCard ${
        project.link ? "ProjectCard-with-link" : ""
      } ${identifier}`}
      style={styling.card}
    >
      <div>
        <p className="title" style={styling.blanco}>
          {name}
        </p>
        <p className="type-project">{type}</p>
      </div>
      <div className="project-img">
        <img src={image} alt="project logo" />
      </div>
      <div className="project-techs">
        {technologies.map((tech, i) => (
          <div className="tech" key={i}>
            <img src={addImage(tech)} alt={`${tech} Icon`} />
            <p style={styling.blanco}>{tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
