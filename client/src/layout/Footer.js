import React, { useContext } from "react";
import GZContext from "../context/GZContext";
import "./styles/Footer.css";

export default function Footer() {
  const { styling } = useContext(GZContext);

  return (
    <div className="Footer" style={styling.footer}>
      <main>
        <div>
          <p style={styling.rosado}>TECHNOLOGIES</p>
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <p style={styling.rosado}>PROFILES</p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/gustavo-zapata/"
                target="_blank"
                rel="noopener noreferrer"
                style={styling.footerLink}
              >
                <img
                  src={require("../images/linkedin.png")}
                  alt="LinkedIn logo"
                />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gustavozapata"
                target="_blank"
                rel="noopener noreferrer"
                style={styling.footerLink}
              >
                <img src={require("../images/github.png")} alt="GitHub logo" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/6099890/gustavozapata"
                target="_blank"
                rel="noopener noreferrer"
                style={styling.footerLink}
              >
                <img
                  src={require("../images/stackoverflow.png")}
                  alt="Stack Overflow logo"
                />
                Stackoverflow
              </a>
            </li>
            <li>
              <a
                href="https://www.hackerrank.com/tavordie?hr_r=1"
                target="_blank"
                rel="noopener noreferrer"
                style={styling.footerLink}
              >
                <img
                  src={require("../images/hackerrank2.png")}
                  alt="HackerRank logo"
                />
                HackerRank
              </a>
            </li>
          </ul>
        </div>
        <div className="extras">
          <p style={styling.rosado}>EXTRAS</p>
          <ul>
            <li>Contact Me</li>
            <li>Visitors</li>
          </ul>
        </div>
        <div>
          <p style={styling.rosado}>VERSIONS</p>
          <ul>
            <li>GZ Version 1.0</li>
            <li>GZ Version 2.0</li>
          </ul>
        </div>
      </main>
      <div className="bottom">
        <p>&copy; GZ 2020</p>
      </div>
    </div>
  );
}
