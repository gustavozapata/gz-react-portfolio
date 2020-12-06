import React, { useContext } from "react";
import GZContext from "../context/GZContext";
import "./styles/Footer.css";

export default function Footer() {
  const { styling } = useContext(GZContext);

  return (
    <div className="Footer" style={styling.footer}>
      <main>
        <div>
          <p style={styling.morado}>TECHNOLOGIES</p>
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <p style={styling.morado}>PROFILES</p>
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
                {/* <img src={require("../images/github.png")} alt="GitHub logo" /> */}
                <span className="octicon" style={styling.svgblanco}>
                  <svg
                    viewBox="0 0 16 16"
                    version="1.1"
                    aria-hidden="true"
                    className="ghsvg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </span>
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
          <p style={styling.morado}>EXTRAS</p>
          <ul>
            <li>Contact Me</li>
            <li>Visitors</li>
          </ul>
        </div>
        <div>
          <p style={styling.morado}>VERSIONS</p>
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
