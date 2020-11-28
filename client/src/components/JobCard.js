import React from "react";
import "./styles/JobCard.css";

export default function JobCard(props) {
  return (
    <div className="JobCard">
      <div className="logo">
        <img
          id={props.company}
          src={require(`../images/${props.image}`)}
          alt={`${props.company} logo`}
        />
        <p className="date">Aug 19 - Jul 20</p>
      </div>
      <div className="information">
        <p className="company">{props.company}</p>
        <p className="role">{props.role}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
