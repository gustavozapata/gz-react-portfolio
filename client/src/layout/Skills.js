import React from "react";
import "./styles/Skills.css";
import js from "../images/js.png";
import react from "../images/react.png";
import swift from "../images/swiftui.png";
import java from "../images/java.png";
import php from "../images/php.png";

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
          <div>
            <span>
              <img src={js} alt="JS logo" />
              <p>JavaScript</p>
            </span>
            <span>
              <img src={require("../images/node.png")} alt="Node logo" />
              <p>Node.js</p>
            </span>
            <span>
              <img src={react} alt="React logo" />
              <p>React</p>
            </span>
            <span>
              <img src={require("../images/mongo.png")} alt="React logo" />
              <p>MongoDB</p>
            </span>
          </div>
          <div>
            <span>
              <img src={swift} alt="Swift logo" />
              <p>Swift</p>
            </span>
            <span>
              <img src={java} alt="Java logo" />
              <p>Java</p>
            </span>
            <span>
              <img src={php} alt="PHP logo" />
              <p>PHP</p>
            </span>
            <span>
              <img src={require("../images/mysql.png")} alt="MySQL logo" />
              <p>MySQL</p>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
