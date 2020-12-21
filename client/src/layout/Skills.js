import React, { useContext } from "react";
import skills from "../data/skills.json";
import SkillCard from "../components/SkillCard";
import GZContext from "../context/GZContext";
import "./styles/Skills.css";

export default function Skills() {
  const { content, styling } = useContext(GZContext);

  return (
    <div className="Skills" style={styling.section}>
      <div className="page">
        <h1 style={styling.morado}>{content.SKILLS_TITLE}</h1>
        <h3 style={styling.gris}>{content.SKILLS_SUB}</h3>
        <p style={styling.gris}></p>
        <main>
          <div className="cards">
            {skills.map((skill, i) => (
              <SkillCard skill={skill} key={i} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
