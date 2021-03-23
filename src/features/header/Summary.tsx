import React from "react";
import "./summary.css";
import GithubIcon from "../../assets/icons/github-brands.svg";
import LinkedInIcon from "../../assets/icons/linkedin-brands.svg";
import Layout from "../utils/Layout";

export default function Summary() {
  return (
    <Layout>
      <div className="header-container-about">
        <div className="about_me-container">
          <p>
            Hi, I'm Ben. <br />
            <br />
            I'm a full stack developer from Basingstoke, England. <br />
            <br />I enjoy creating functional web apps in React and Angular
            using Dotnet, NodeJS, MongoDB and SQL.
          </p>
        </div>
      </div>

      <div className="header-container-title">
        <h1>Ben Critchley</h1>
        <div style={{ position: "relative" }}>
          <h2>Full Stack Developer</h2>
          <div className="social-container">
            <a
              href="https://github.com/Critchleyb"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} className="social-icon" alt="Github Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ben-critchley-855b08105/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedInIcon}
                className="social-icon"
                alt="Linkedin Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
