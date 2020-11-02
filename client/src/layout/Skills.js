import React from "react";
import "./styles/Skills.css";
import skills from "../data/skills.json";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <div className="Skills">
      <div className="page">
        <h1>Skills</h1>
        <h3>Technical skills gained throughout my career</h3>
        <p>
          From my first Web Development book to a software engineering job in
          the heart of Silicon Valley, I have gained a wide range of
          <span> professional and technical skills.</span>
        </p>
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
