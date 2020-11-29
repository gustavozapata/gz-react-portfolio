import React, { useContext } from "react";
import { convertToImageName } from "../utils/utils";
import GZContext from "../context/GZContext";
import "./styles/SkillCard.css";

export default function SkillCard({ skill }) {
  const { styling } = useContext(GZContext);

  const { name, type } = skill;
  return (
    <div className="SkillCard" style={styling.name}>
      <img
        src={require(`../images/${convertToImageName(name)}.png`)}
        alt={`${name} Icon`}
      />
      <p>{name}</p>
      <p className="experience">{type}</p>
    </div>
  );
}
