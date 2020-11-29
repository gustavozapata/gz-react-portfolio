import React, { useContext } from "react";
import GZContext from "../context/GZContext";
import "./styles/JobCard.css";

export default function JobCard(props) {
  const { styling } = useContext(GZContext);

  return (
    <div className="JobCard">
      <div className="logo">
        <img
          id={props.company}
          src={require(`../images/${props.image}`)}
          alt={`${props.company} logo`}
        />
        <p className="period" style={styling.name}>
          {props.period}
        </p>
      </div>
      <div className="information">
        <p className="company" style={styling.amarillo}>
          {props.company}
        </p>
        <p className="role" style={styling.appSubtitle1}>
          {props.role}
        </p>
        <p className="description" style={styling.name}>
          {props.description}
        </p>
      </div>
    </div>
  );
}
