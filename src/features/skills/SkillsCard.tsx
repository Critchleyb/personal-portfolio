import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faServer,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./skillsCard.css";

export default function SkillsCard() {
  return (
    <div className="skills-card-container">
      <div className="skills-card-section">
        <FontAwesomeIcon icon={faDesktop} className="skills-card-icon" />
        <h3>Front-End</h3>
        <p>
          I enjoy using modern frameworks such as Angular and React to build on
          my own HTML and CSS, creating a great user experience.
        </p>
        <h4 className="skills-card-h4">Launguages I Write</h4>
        <ul className="skills-card-list">
          <li className="skills-card-list-item">HTML5</li>
          <li className="skills-card-list-item">CSS / SCSS</li>
          <li className="skills-card-list-item">JavaScript ES6</li>
          <li className="skills-card-list-item">React</li>
          <li className="skills-card-list-item">Angular</li>
        </ul>
      </div>
      <div className="skills-card-section skills-card-section-middle">
        <FontAwesomeIcon icon={faServer} className="skills-card-icon" />
        <h3>Back-End</h3>
        <p>
          I can employ both C# and JavaScript to create powerful backends that
          are robust and fit for purpose.
        </p>
        <h4 className="skills-card-h4">What I know</h4>
        <ul className="skills-card-list">
          <li className="skills-card-list-item">C#</li>
          <li className="skills-card-list-item">DotNet</li>
          <li className="skills-card-list-item">JavaScript</li>
          <li className="skills-card-list-item">NodeJS</li>
        </ul>
      </div>
      <div className="skills-card-section">
        <FontAwesomeIcon icon={faDatabase} className="skills-card-icon" />
        <h3>Databases</h3>
        <p>
          I've taken time to understand both SQL and NoSQL Databases, so I can
          choose the most effective tool for the job.
        </p>
        <h4 className="skills-card-h4">Tech I Use</h4>
        <ul className="skills-card-list">
          <li className="skills-card-list-item">MongoDB</li>
          <li className="skills-card-list-item">Mongoose</li>
          <li className="skills-card-list-item">SQL</li>
          <li className="skills-card-list-item">Entity Framework</li>
        </ul>
      </div>
    </div>
  );
}
