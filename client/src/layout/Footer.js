import React from "react";
import "./styles/Footer.css";

export default function Footer({ setLanguage }) {
  return (
    <div className="Footer">
      <main>
        <div>
          <p>VERSIONS</p>
          <ul>
            <li>GZ Version 1.0</li>
            <li>GZ Version 2.0</li>
          </ul>
        </div>
        <div className="languages">
          <p>LANGUAGES</p>
          <ul>
            <li onClick={() => setLanguage("English")}>English</li>
            <li onClick={() => setLanguage("Spanish")}>Spanish</li>
          </ul>
        </div>
        <div>
          <p>PROFILES</p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/gustavo-zapata/"
                target="_blank"
                rel="noopener noreferrer"
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
              >
                <img
                  src={require("../images/stackoverflow.png")}
                  alt="Stack Overflow logo"
                />
                Stackoverflow
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>TECHNOLOGIES</p>
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </main>
      <div className="bottom">
        <p>&copy; GZ 2020</p>
      </div>
    </div>
  );
}
