import React, { useContext } from "react";
import { convertToImageName } from "../utils/utils";
import GZContext from "../context/GZContext";
import "./styles/ProjectCard.css";

export default function ProjectCard({ project }) {
  const { styling } = useContext(GZContext);
  const { name, type, technologies, identifier } = project;

  return (
    <div className={`ProjectCard ${identifier}`} style={styling.card}>
      <p className="title" style={styling.aguamarina}>
        {name}
      </p>
      <p className="type-project">{type}</p>
      <div className="project-img">
        <img src={require(`../images/${identifier}.png`)} alt="job logo" />
      </div>
      <div className="project-techs">
        {technologies.map((tech, i) => (
          <div className="tech" key={i}>
            <img
              src={require(`../images/${convertToImageName(tech)}.png`)}
              alt={`${tech} Icon`}
            />
            <p style={styling.blanco}>{tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
