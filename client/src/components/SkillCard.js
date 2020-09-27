import React from "react";
import {convertToImageName} from "../utils/utils"
import './styles/SkillCard.css'

export default function SkillCard({skill}) {
    const {name, type} = skill
    return (
        <div className="SkillCard">
            <img src={require(`../images/${convertToImageName(name)}.png`)} alt={`${name} Icon`}/>
              <p>{name}</p>
              <p className="experience">{type}</p>
        </div>
    )
}