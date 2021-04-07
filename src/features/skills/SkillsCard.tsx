import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faServer,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./skillsCard.scss";

export default function SkillsCard() {
  return (
    <div className="skills-card">
      <div className="skills-card-section">
        <FontAwesomeIcon icon={faDesktop} className="skills-card-icon" />
        <h3>Front-End</h3>
        <p>
          I enjoy using modern frameworks such as Angular and React to build on
          my own HTML and CSS, creating a great user experience.
        </p>
        <h4 className="skills-card-h4">Launguages I Write</h4>
        <ul className="skills-card-list">
          <li>HTML5</li>
          <li>CSS / SCSS</li>
          <li>JavaScript ES6</li>
          <li>React</li>
          <li>Angular</li>
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
          <li>C#</li>
          <li>.Net Core</li>
          <li>JavaScript</li>
          <li>NodeJS</li>
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
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>SQL</li>
          <li>Entity Framework</li>
        </ul>
      </div>
    </div>
  );
}
