import React from "react";
import "./styles/ProjectCard.css";

export default function ProjectCard() {
  return (
    <div className="ProjectCard">
      <p className="title">API with Spring Boot</p>
      <p className="type-project">Personal Project</p>
      <div className="tech">
        <img src={require("../images/spring.png")} alt="Spring Boot Icon" />
        <p>Spring Boot</p>
      </div>
      <div className="tech">
        <img src={require("../images/js.png")} alt="JavaScript Icon" />
        <p>JavaScript</p>
      </div>
    </div>
  );
}
