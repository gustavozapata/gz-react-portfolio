import React from "react";
import "./styles/Education.css";

export default function Education() {
  return (
    <div className="Education">
      <div className="page">
        <h1>Education</h1>
        <h3>All of my favorite projects</h3>
        <p>
          From my first Web Development book to a software engineering job in
          the heart of Silicon Valley, I have gained a wide range of
          <span> professional and technical skills.</span>
        </p>
        <main>
          <div className="institution">
            <p className="name">Kingston University London</p>
            <img src={require("../images/ku.png")} alt="KU logo" />
            <p>2017 - 2021</p>
          </div>
          <div className="institution">
            <p className="name">Kingston College</p>
            <img src={require("../images/kc.png")} alt="KU logo" />
            <p>2016 - 2017</p>
          </div>
        </main>
      </div>
    </div>
  );
}
