import React from "react";
import "./styles/JobCard.css";

export default function JobCard(props) {
  return (
    <div className="JobCard">
      <div className="logo">
        <img
          src={require(`../images/${props.image}`)}
          alt={`${props.company} logo`}
        />
      </div>
      <div className="description">
        <p className="company">{props.company}</p>
        <p className="role">{props.role}</p>
      </div>
    </div>
  );
}
