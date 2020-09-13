import React from "react";
import "./styles/Footer.css";

export default function Footer() {
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
        <div>
          <p>LANGUAGES</p>
          <ul>
            <li>English</li>
            <li>Spanish</li>
          </ul>
        </div>
        <div>
          <p>PROFILES</p>
          <ul>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Stackoverflow</li>
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
