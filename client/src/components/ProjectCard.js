import React from "react";
import "./styles/ProjectCard.css";
import { convertToImageName } from "../utils/utils";

export default function ProjectCard({ project }) {
  const { name, type, technologies } = project;
  return (
    <div className="ProjectCard">
      <p className="title">{name}</p>
      <p className="type-project">{type}</p>
      {technologies.map((tech, i) => (
        <div className="tech" key={i}>
          <img
            src={require(`../images/${convertToImageName(tech)}.png`)}
            alt={`${tech} Icon`}
          />
          <p>{tech}</p>
        </div>
      ))}
    </div>
  );
}
