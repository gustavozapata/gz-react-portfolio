import React, { useContext } from "react";
import GZContext from "../context/GZContext";
import "./styles/SkillCard.css";

export default function SkillCard({ skill }) {
  const { styling } = useContext(GZContext);

  const addImage = (tech) => {
    tech = tech.toLowerCase().replace(/\s/g, "");
    return require(`../images/${tech}.png`);
  };

  const { name, type } = skill;
  return (
    <div className="SkillCard" style={styling.gris}>
      <img src={addImage(name)} alt={`${name} Icon`} />
      <p style={styling.blanco}>{name}</p>
      <p className="experience">{type}</p>
    </div>
  );
}
