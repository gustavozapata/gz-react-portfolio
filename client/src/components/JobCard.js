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
        <p className="period" style={styling.gris}>
          {props.period}
        </p>
      </div>
      <div className="information">
        <p className="company" style={styling.amarillo}>
          {props.company}
        </p>
        <p className="role" style={styling.aguamarina}>
          {props.role}
        </p>
        {props.modules ? (
          props.modules.map((module, id) => (
            <p key={id} className="modules" style={styling.gris}>
              {module}
            </p>
          ))
        ) : (
          <p className="description" style={styling.gris}>
            {props.description}
          </p>
        )}
      </div>
    </div>
  );
}
